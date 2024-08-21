import { AsyncHandler } from "../utlis/AsyncHandler.js";
import { ApiError } from "../utlis/ApiError.js";
import { ApiResponse } from "../utlis/ApiResponse.js";
// import { Company } from "../models/Company.model.js";
import { Job } from "../models/Job.model.js";

const addJobs = AsyncHandler(async (req, res) => {
    const { title, description, requirements, salary, experienceLevel, location, jobType, positionsAvailable, company } = req.body

    const userId = req.user?._id

    if (!userId) {
        throw new ApiError(400, "User id not found")
    }
    // console.log(userId);

    if (!title || !description || !requirements || !salary || !experienceLevel || !location || !jobType || !positionsAvailable || !company) {
        throw new ApiError(400, "All fields are required");
    }

    const existingJob = await Job.findOne({ title, company });
    if (existingJob) {
        throw new ApiError(400, "A job with this title already exists for the given company");
    }

    const job = await Job.create({
        title,
        description,
        requirements: requirements.split(","),
        salary,
        experienceLevel,
        location,
        jobType,
        positionsAvailable,
        company,
        createdBy: userId
    })

    return res.status(201).json(
        new ApiResponse(201, job, "Job Added Successfull")
    )

})

const getAllJobs = AsyncHandler(async (req, res) => {

    const keyword = req.query.keyword || ""

    const query = {
        $or: [
            { title: { $regex: keyword, $options: "i" } },
            { description: { $regex: keyword, $options: "i" } },
        ]
    }

    const jobs = await Job.find(query).populate({
        path: "company"
    }).sort({ createdAt: -1 });

    if (!jobs) {
        throw new ApiError(404, "No Jobs Found")
    }

    return res.status(200).json(
        new ApiResponse(200, jobs, "Jobs fetched successfully")
    )


    // this will work but we need Search Functionality .

    // Fetch all jobs from the database
    // const jobs = await Job.find().populate('company createdBy application');

    // // Return the jobs with a success response
    // return res.status(200).json(
    //     new ApiResponse(200, jobs, "Jobs fetched successfully")
    // );

})

const getJobById = AsyncHandler(async (req, res) => {
    const jobId = req.params.id

    const job = await Job.findById(jobId).populate({
        path: 'application'
    })

    if (!job) {
        throw new ApiError(404, "No Jobs Found")
    }

    return res.status(200).json(
        new ApiResponse(200, job, "Job fetched successfully")
    )

})

const getAdminJobs = AsyncHandler(async (req, res) => {

    const adminId = req.user?.id;

    if (!adminId) {
        throw new ApiError(400, "admin id not found")
    }

    const jobs = await Job.find({ createdBy: adminId }).populate({
        path: 'company',
        createdAt: -1
    });

    if (!jobs) {
        throw new ApiError(404, "No Jobs Found")
    }

    return res.status(200).json(
        new ApiResponse(200, jobs, "Jobs fetched successfully")
    )

})

export { addJobs, getAllJobs, getJobById ,getAdminJobs }