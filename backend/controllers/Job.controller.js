import { AsyncHandler } from "../utlis/AsyncHandler.js";
import { ApiError } from "../utlis/ApiError.js";
import { ApiResponse } from "../utlis/ApiResponse.js";
// import { Company } from "../models/Company.model.js";
import { Job } from "../models/Job.model.js";
import { Company } from "../models/Company.model.js";

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

    const existingCompany = await Company.findById(company)


    // Check if the company exists and is approved by the admin

    if (!existingCompany) {
        throw new ApiError(404, "Company not found");
    }

    if (existingCompany.status !== "accepted") {
        throw new ApiError(400, "Company is not approved yet. Jobs can only be added for approved companies.");
    }

    // Check if the job with the same title exists for the given company

    const existingJob = await Job.findOne({ title, company });
    if (existingJob) {
        throw new ApiError(400, "A job with this title already exists for the given company");
    }

    // Create a new job and save it to the database
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
        createdBy: userId,
        status: "pending",
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
        path: 'application',

        // ki ye huwa kaise ki job ke under populate likhne par application ka detail a raha hai  (company.application)
        // populate: {
        //     path: 'application',
        // }

    })

    if (!job) {
        throw new ApiError(404, "No Jobs Found")
    }

    return res.status(200).json(
        new ApiResponse(200, job, "Job fetched successfully")
    )

})

const updateJob = AsyncHandler(async (req, res) => {

    const { title, description, requirements, salary } = req.body
    const jobId = req.params.id

    try {

        let requirementsArray;
        if (requirements && typeof requirements === 'string') {
            // Split the string by commas and trim whitespace from each skill
            requirementsArray = requirements.split(',').map(skill => skill.trim());
        }
        console.log(requirementsArray);

        const updatedJob = {}
        if (title) updatedJob.title = title;
        if (description) updatedJob.description = description
        if (requirements) updatedJob.requirements = requirementsArray
        if (salary) updatedJob.salary = salary

        const job = await Job.findByIdAndUpdate(jobId,
            {
                $set: updatedJob
            },
            {
                new: true
            }
        )

        if (!job) {
            throw new ApiError(404, "Job not found");
        }

        return res.status(200)
            .json(
                new ApiResponse(200, job, "Job updated successfully")
            )

    } catch (error) {
        console.log(error);
        return res.status(500).json(
            new ApiError(500, "An error occurred while updating the job")
        );
    }
})

const getAdminJobs = AsyncHandler(async (req, res) => {

    const adminId = req.user?.id;

    if (!adminId) {
        throw new ApiError(400, "admin id not found")
    }

    const jobs = await Job.find({ createdBy: adminId }).populate({
        path: 'company',
        createdAt: -1,

    });

    if (!jobs) {
        throw new ApiError(404, "No Jobs Found")
    }

    return res.status(200).json(
        new ApiResponse(200, jobs, "Jobs fetched successfully")
    )

})

const addJobsByCompanyId = AsyncHandler(async (req, res) => {
    const { title, description, requirements, salary, experienceLevel, location, jobType, positionsAvailable, company } = req.body

    const companyId = req.params.id

    const userId = req.user?._id

    if (!userId) {
        throw new ApiError(400, "User id not found")
    }
    // console.log(userId);

    if (!title || !description || !requirements || !salary || !experienceLevel || !location || !jobType || !positionsAvailable ) {
        throw new ApiError(400, "All fields are required");
    }

    // const companyVerfiy = await Company.findOne({ _id: companyId, createdBy: userId });
    // if (!companyVerfiy) {
    //     throw new ApiError(403, "You are not authorized to add jobs for this company");
    // }

    const existingJob = await Job.findOne({ title, company: companyId });
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
        company: companyId,
        createdBy: userId
    })

    return res.status(201).json(
        new ApiResponse(201, job, "Job Added Successfull")
    )

})

export { addJobs, getAllJobs, getJobById, getAdminJobs, updateJob, addJobsByCompanyId }