import { AsyncHandler } from "../utlis/AsyncHandler.js";
import { ApiError } from "../utlis/ApiError.js";
import { ApiResponse } from "../utlis/ApiResponse.js";
import { Company } from "../models/Company.model.js";


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
        throw new ApiError(401, "Companies not found")
    }

    return res.status(200)
        .json(
            new ApiResponse(200, companies, "Company fetch Successfull")
        )
})

export { companyRegistration , getCompany}