import { AsyncHandler } from "../utlis/AsyncHandler.js"
import { ApiError } from "../utlis/ApiError.js"
import { ApiResponse } from "../utlis/ApiResponse.js"
import { User } from "../models/User.model.js";
import uploadOnCloudniary from "../utlis/Cloudinary.js";

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
    if (req.files && Array.isArray(req.files.avatar) && req.files.avatar.length > 0) {
        // console.log("File uploaded: ", req.files.avatar[0].path);
        avatarLocalPath = req.files.avatar[0].path;
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
        new ApiResponse(200, "User Register Successfull")
    )

})

export {
    userRegistration
}