import { AsyncHandler } from "../utlis/AsyncHandler.js";
import { Company } from "../models/Company.model.js";
import { ApiError } from "../utlis/ApiError.js";
import { ApiResponse } from "../utlis/ApiResponse.js";


// Get all pending companies (admin only)
const getPendingCompanies = AsyncHandler(async (req, res) => {

    if (req.user.role !== "admin") {
        throw new ApiError(403, "Access denied. Only admins can access this resource.");
    }

    const pendingCompanies = await Company.find({ status: "pending" })

    if (!pendingCompanies || pendingCompanies.length === 0) {
        throw new ApiError(404, "No pending companies found.");
    }

    return res.status(200).json(
        new ApiResponse(200, pendingCompanies, "Pending companies fetched successfully.")
    )

})

// Accept or reject a company requests by admin

const updateCompanyStatus = AsyncHandler(async (req, res) => {

    if (req.user.role !== "admin") {
        throw new ApiError(403, "Access denied. Only admins can access this resource.");
    }

    const { status } = req.body;
    const companyId = req.params.id;

    if (!status) {
        throw new ApiError(400, "Status is required.");
    }

    // Find the company by its ID
    const company = await Company.findById(companyId);

    if (!company) {
        throw new ApiError(404, "Company not found");
    }

    company.status = status.toLowerCase();
    await company.save();

    return res.status(200).json(
        new ApiResponse(200, company, `Company status updated successfully to ${status}.`)
    )

})

export {getPendingCompanies, updateCompanyStatus}

// Get company by ID