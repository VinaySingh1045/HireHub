import mongoose, { Types } from "mongoose";

const JobSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        requirements: [{
            type: String
        }],
        salary: {
            type: Number,
            required: true
        },
        experienceLevel: {
            type: Number,
            required: true,
        },
        location: {
            type: String,
            required: true
        },
        jobType: {
            type: String,
            enum: ["Full-Time", "Part-Time"],
            required: true
        },
        positionsAvailable: {
            type: Number,
            required: true
        },
        company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Company",
            required: true
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        application: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Application",
        }
    },
    {
        timestamps: true
    })

export const Job = mongoose.model("Job", JobSchema)