import { AsyncHandler } from "../utlis/AsyncHandler.js"
import { ApiError } from "../utlis/ApiError.js"
import { ApiResponse } from "../utlis/ApiResponse.js"
import { User } from "../models/User.model.js";
import uploadOnCloudniary from "../utlis/Cloudinary.js";

const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId)

        if (!user) {
            throw new ApiError(404, "User not found");
        }

        // Add logging
        console.log('User found:', user);

        const accessToken = user.generateAccessToken();
        console.log('Access Token generated:', accessToken);

        const refreshToken = user.generateRefreshToken();
        console.log('Refresh Token generated:', refreshToken);

        user.refreshToken = refreshToken

        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }

    } catch (error) {
        console.error('Error in generateAccessAndRefreshToken:', error);
        throw new ApiError(500, "Something went wrong while generating Refresh and Access Token ")
    }
}

const userRegistration = AsyncHandler(async (req, res) => {
    const { fullName, email, password, phoneno, role } = req.body;

    if ([fullName, email, password, phoneno, role].some((feild) => feild?.trim() === "")) {
        throw new ApiError(400, "All fields are required")
    }

    // Check kar rahe hai user phele se to nahi hai na
    const existedUser = await User.findOne({ email })

    if (existedUser) {
        throw new ApiError(409, "Email is already exists");
    }

    // uploading the image

    let avatarLocalPath;
    if (req.file) {
        avatarLocalPath = req.file.path;
    }

    const avatar = await uploadOnCloudniary(avatarLocalPath);
    // console.log("Cloudinary response: ", avatar);

    // creating user 
    const user = await User.create({
        fullName,
        email,
        password,
        phoneno,
        role,
        avatar: avatar?.url || "",
    })

    // removing the sensetive field
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, {}, "User Register Successfull")
    )

})

const userLogin = AsyncHandler(async (req, res) => {
    const { email, password, role } = req.body

    if (!email) {
        throw new ApiError(400, "Email field is required");
    }
    if (!password) {
        throw new ApiError(400, "Password field is required");
    }
    if (!role) {
        throw new ApiError(400, "Role field is required");
    }

    const user = await User.findOne({ email })

    if (!user) {
        throw new ApiError(400, "Email Doesn't exists");
    }

    const isPasswordValidate = await user.isPasswordCorrect(password)

    if (!isPasswordValidate) {
        throw new ApiError(401, "Invaild User Credentials");
    }

    // Check if the user's role matches the provided role
    if (user.role !== role) {
        throw new ApiError(403, "User does not exist with current role");
    }

    // Now genrating refresh and access token and saving in cookies for sesssion

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id)

    // Retrieve user data without sensitive fields

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    // Set cookies options
    const options = {
        httpOnly: true,
        secure: true
    };

    return res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser, accessToken, refreshToken
                },
                "User logged in Successfully"
            )
        )

})

const userLogout = AsyncHandler(async (req, res) => {

    try {
        await User.findByIdAndUpdate(
            req.user._id,
            {
                $unset: {
                    refreshToken: 1
                },
            },
            {
                new: true
            }
        )

        const options = {
            httpOnly: true,
            secure: true
        }

        return res
            .status(200)
            .clearCookie("accessToken", options)
            .clearCookie("refreshToken", options)
            .json(
                new ApiResponse(200, {}, "User Logout Successfull")
            )

    } catch (error) {
        console.log("Logout:Error ", error)
    }
})

const changeUserPassword = AsyncHandler(async (req, res) => {
    const { oldPassword, newPassword } = req.body;

    if (!(oldPassword || newPassword)) {
        throw new ApiError(400, "Old password and new password are required")
    }

    // req.user?._id ye middle ware banaye hai waha se pata kar rahe hai user ka
    const user = await User.findById(req.user?._id)

    if (!user) {
        throw new ApiError(400, "User Doesn't Exists")
    }

    const checkPassword = await user.isPasswordCorrect(oldPassword)

    if (!checkPassword) {
        throw new ApiError(400, "Invalid OldPassword")
    }

    user.password = newPassword
    await user.save({ validateBeforeSave: false })

    return res.status(200).json(
        new ApiResponse(200, {}, "Password Change Successfully")
    )

})

const getCurrentUser = AsyncHandler(async (req, res) => {
    return res.status(200)
        .json(
            new ApiResponse(200, req.user, "Current User fetch Successfully")
        )
})

const updateUserAccount = AsyncHandler(async (req, res) => {

    // console.log('Request Body:', req.body);


    const { fullName, phoneno, bio, skills, aboutMe } = req.body

    console.log(typeof skills); // Should output 'string'
    console.log(skills); // Should output 'string'


    // console.log(fullName);
    // console.log(bio);
    // console.log(phoneno);
    // console.log(skills);

    // if (!fullName && !phoneno && !bio && !skills) {
    //     throw new ApiError(400, "At least one field is required to update");
    // }


    try {
        let skillsArray;
        if (skills && typeof skills === 'string') {
            // Split the string by commas and trim whitespace from each skill
            skillsArray = skills.split(',').map(skill => skill.trim());
        }
        console.log(skillsArray); // Should output 'string'


        // Create an object with the fields that need to be (Trying new way)

        const updatedFields = {};
        if (fullName) updatedFields.fullName = fullName;
        if (phoneno) updatedFields.phoneno = phoneno;
        if (bio) updatedFields.bio = bio;
        if (aboutMe) updatedFields.aboutMe = aboutMe;
        if (skills) updatedFields.skills = skillsArray;


        const user = await User.findByIdAndUpdate(req.user?._id,
            {
                $set: updatedFields
            },
            {
                new: true
            }
        ).select("-password")

        if (!user) {
            throw new ApiError(400, "User Doesn't Exist")
        }

        return res.status(200)
            .json(
                new ApiResponse(200, user, "User Updated Successfully")
            )
    } catch (error) {
        console.log(error);
    }

})

const updateUserAvatar = AsyncHandler(async (req, res) => {
    const avatarLocalPath = req.file?.path

    if (!avatarLocalPath) {
        throw new ApiError(400, "Image File is missing")
    }

    const avatar = await uploadOnCloudniary(avatarLocalPath)
    if (!avatar.url) {
        throw new ApiError(400, "Error While uploading file")
    }

    const user = await User.findByIdAndUpdate(req.user?._id,
        {
            $set: { avatar: avatar.url }
        },
        { new: true }
    ).select("-password")

    return res.status(200)
        .json(
            new ApiResponse(200, user, "Image updated Successfull")
        )

})

const updateUserResume = AsyncHandler(async (req, res) => {
    const resumeLocalPath = req.file?.path

    if (!resumeLocalPath) {
        throw new ApiError(400, "Image File is missing")
    }

    const resume = await uploadOnCloudniary(resumeLocalPath)
    if (!resume.url) {
        throw new ApiError(400, "Error While uploading file")
    }

    const user = await User.findByIdAndUpdate(req.user?._id,
        {
            $set: { resume: resume.url }
        },
        { new: true }
    ).select("-password")

    return res.status(200)
        .json(
            new ApiResponse(200, user, "Resume updated Successfull")
        )

})

export {
    userRegistration, userLogin, userLogout, changeUserPassword, getCurrentUser, updateUserAccount, updateUserAvatar, updateUserResume
}