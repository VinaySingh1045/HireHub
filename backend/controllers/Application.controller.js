import { AsyncHandler } from '../utlis/AsyncHandler.js';
import { ApiError } from '../utlis/ApiError.js';
import { ApiResponse } from '../utlis/ApiResponse.js';
import { Application } from "../models/Application.model.js";
import { Job } from '../models/Job.model.js';

const applyJob = AsyncHandler(async (req, res) => {
    const jobId = req.params.id
    const userId = req.user?._id

    if (!jobId) {
        throw new ApiError(400, "job is required")
    }

    const existingApplication = await Application.findOne({ job: jobId, applicant: userId })

    if (existingApplication) {
        throw new ApiError(400, "You have already applied for this job")
    }

    const job = await Job.findById(jobId)

    if (!job) {
        throw new ApiError(404, "Job not found")
    }

    const newApplication = await Application.create({
        job: jobId,
        applicant: userId
    })

    // we are pushing the job in application field which is an array in job schema 
    job.application.push(newApplication._id);
    await job.save();

    return res.status(201).json(
        new ApiResponse(201, newApplication, "Job Applied Successfully")
    )

})

const getAppliedJob = AsyncHandler(async (req, res) => {
    const userId = req.user?._id

    const application = await Application.find({ applicant: userId })
        .sort({ createdAt: -1 })
        .populate({
            path: "job",
            options: { sort: { createdAt: -1 } },

            populate: {
                path: "company",
                options: { sort: { createdAt: -1 } },
            }

        })

    if (!application) {
        throw new ApiError(404, "No application found")
    }

    return res.status(200).json(
        new ApiResponse(200, application, "Application fetched Successfully")
    )

})

const getApplicant = AsyncHandler(async (req, res) => {
    const jobId = req.params.id

    const job = await Job.findById(jobId)
        .populate({
            path: 'application',
            options: { sort: { createdAt: -1 } },
            populate: {
                path: 'applicant'
            }
        })

    if (!job) {
        throw new ApiError(404, "No Job Found")
    }

    return res.status(200).json(
        new ApiResponse(200, job, "Applicant fetched successfully")
    )

})

const updateStatus = AsyncHandler(async (req, res) => {
    const { status } = req.body;
    const applicationId = req.params.id;
    if (!status) {
        throw new ApiError(400 , "Status is required")
    };

    // find the application by applicantion id
    const application = await Application.findOne({ _id: applicationId });
    if (!application) {
        throw new ApiError(404 , "Application Not Found")
    };

    // update the status
    application.status = status.toLowerCase();
    await application.save();

    return res.status(200).json(
       new ApiResponse(200 , application , "Status updated successfully")
    );

})

export { applyJob, getAppliedJob, getApplicant, updateStatus }
