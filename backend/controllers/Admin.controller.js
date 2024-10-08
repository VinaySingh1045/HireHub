import { AsyncHandler } from "../utlis/AsyncHandler.js";
import { Company } from "../models/Company.model.js";
import { ApiError } from "../utlis/ApiError.js";
import { ApiResponse } from "../utlis/ApiResponse.js";
import { Job } from "../models/Job.model.js";
import { User } from "../models/User.model.js";


// Get all pending companies (admin only)
const getPendingCompanies = AsyncHandler(async (req, res) => {

    if (req.user.role !== "admin") {
        throw new ApiError(403, "Access denied. Only admins can access this resource.");
    }

    const pendingCompanies = await Company.find({ status: "pending" })
        .populate("userId")
        .sort({ createdAt: -1 });

    // Now count the number of pending companies

    const pendingCompaniesCount = await Company.countDocuments({ status: "pending" })

    if (!pendingCompanies || pendingCompanies.length === 0) {
        throw new ApiError(404, "No pending companies found.");
    }

    return res.status(200).json(
        new ApiResponse(200, { pendingCompanies, pendingCompaniesCount }, "Pending companies fetched successfully.")
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

// Get all pending Jobs (admin only)
const getPendingJobs = AsyncHandler(async (req, res) => {

    if (req.user.role !== "admin") {
        throw new ApiError(403, "Access denied. Only admins can access this resource.");
    }

    const pendingJobs = await Job.find({ status: "pending" })
        .populate("company")
        .populate("createdBy")
        .sort({ createdAt: -1 });

    if (!pendingJobs || pendingJobs.length === 0) {
        throw new ApiError(404, "No pending Jobs found.");
    }

    return res.status(200).json(
        new ApiResponse(200, pendingJobs, "Pending Jobs fetched successfully.")
    )

})

// Accept or reject a Job requests by admin

const updateJobStatus = AsyncHandler(async (req, res) => {

    if (req.user.role !== "admin") {
        throw new ApiError(403, "Access denied. Only admins can access this resource.");
    }

    const { status } = req.body;
    const jobId = req.params.id;

    if (!status) {
        throw new ApiError(400, "Status is required.");
    }

    // Find the job by its ID
    const job = await Job.findById(jobId);

    if (!job) {
        throw new ApiError(404, "Job not found");
    }

    job.status = status.toLowerCase();
    await job.save();

    return res.status(200).json(
        new ApiResponse(200, job, `Job status updated successfully to ${status}.`)
    )

})

const getAllUsers = AsyncHandler(async (req, res) => {
    if (req.user.role !== "admin") {
        throw new ApiError(403, "Access denied. Only admins can access this resource.");
    }
    const users = await User.find()
    .sort({ createdAt: -1 });


    return res.status(200).json(
        new ApiResponse(200, users, "All users fetched successfully.")
    )

})

const getAllEmployerUsers = AsyncHandler(async (req, res) => {
    if (req.user.role !== "admin") {
        throw new ApiError(403, "Access denied. Only admins can access this resource.");
    }
    const users = await User.find({ role: "employer" })
    .sort({ createdAt: -1 });


    return res.status(200).json(
        new ApiResponse(200, users, "Employer users fetched successfully.")
    )

})

const getAllJobSeekerUsers = AsyncHandler(async (req, res) => {
    if (req.user.role !== "admin") {
        throw new ApiError(403, "Access denied. Only admins can access this resource.");
    }
    const users = await User.find({ role: "jobSeeker" })
    .sort({ createdAt: -1 });


    return res.status(200).json(
        new ApiResponse(200, users, "JobSeeker users fetched successfully.")
    )

})

export { getPendingCompanies, updateCompanyStatus, getPendingJobs, updateJobStatus, getAllUsers, getAllEmployerUsers, getAllJobSeekerUsers }


