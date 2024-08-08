import { AsyncHandler } from "../utlis/AsyncHandler.js";
import { ApiError } from "../utlis/ApiError.js";
import { ApiResponse } from "../utlis/ApiResponse.js";
import { Company } from "../models/Company.model.js";
import uploadOnCloudniary from "../utlis/Cloudinary.js";


const companyRegistration = AsyncHandler(async (req, res) => {
    const { companyName } = req.body;

    if (!companyName) {
        throw new ApiError(401, "CompanyName is Required")
    }

    const existedCompany = await Company.findOne({ companyName })

    if (existedCompany) {
        throw new ApiError(409, "Company already exists");
    }

    const company = await Company.create({
        companyName: companyName,
        userId: req.user?._id
    })

    return res.status(201).json(
        new ApiResponse(201, company, "Company register successfully")
    )

})

// ye vo company dekhga jo user ne dala hoga particularly 
const getCompany = AsyncHandler(async (req, res) => {

    const userId = req.user?._id

    // Use find when you want to retrieve all companies registered by a specific user.

    const companies = await Company.find({ userId })

    if (companies.length === 0) {
        throw new ApiError(404, "Companies not found")
    }

    return res.status(200)
        .json(
            new ApiResponse(200, companies, "Companies fetched Successfull")
        )
})

const getCompanyById = AsyncHandler(async (req, res) => {
    const companyId = req.params.id

    const company = await Company.findById(companyId)

    if (!company) {
        throw new ApiError(404, "Company not found")
    }


    return res.status(200)
        .json(
            new ApiResponse(200, company, "Company fetched Successfull")
        )

})

const updateCompany = AsyncHandler(async (req, res) => {
    const { description, websiteUrl, location, companyName } = req.body

    const companyLogoPath = req.file?.path
    const companyLogo = await uploadOnCloudniary(companyLogoPath)

    if (!companyLogo) {
        throw new ApiError(500, "Error uploading logo");
    }

    if (!(description || websiteUrl || location || companyName || companyLogoPath)) {
        throw new ApiError(400, "At least one field is required to update")
    }

    // If a new company name is provided, check for duplicates
    if (companyName) {
        const existingCompany = await Company.findOne({
            companyName,
            _id: { $ne: req.params.id } // check not equal to id 
        });

        if (existingCompany) {
            throw new ApiError(409, "Company with this name already exists");
        }
    }

    const updatedFields = {};
    if (description) updatedFields.description = description;
    if (websiteUrl) updatedFields.websiteUrl = websiteUrl;
    if (location) updatedFields.location = location;
    if (companyName) updatedFields.companyName = companyName;
    if (companyLogo) updatedFields.logo = companyLogo.url;

    const company = await Company.findByIdAndUpdate(req.params.id,
        {
            $set: updatedFields
        },
        {
            new: true
        }
    )

    if (!company) {
        throw new ApiError(404, "Company not found");
    }

    return res.status(200)
        .json(
            new ApiResponse(200, company, "Company Updated Successfully")
        )

})

export { companyRegistration, getCompany, getCompanyById, updateCompany }