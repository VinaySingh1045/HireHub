import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    websiteUrl: {
        type: String
    },
    location: {
        type: String
    },
    logo: {
        type: String,  // url aayegi Cloudinary ki
        default: ""
    },
    status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
},
    { timestamps: true }
)

export const Company = mongoose.model("Company", CompanySchema);