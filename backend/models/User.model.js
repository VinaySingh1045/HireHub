import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "FullName is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    phoneno: {
        type: Number,
        required: [true, "PhoneNo is required"]
    },
    role: {
        type: String,
        required: [true, "Role is required"],
        enum: ["jobSeeker", "employer", "admin"]
    },
    aboutMe:{
        type: String,
    },

    bio: {
        type: String,
    },
    skills: [
        {
            type: String,
        }
    ],
    resume: {
        type: String, // url aayegi cloudnary ki
        default: ""
    },
    resumeOrginalName: {
        type: String
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: "Company"
    },
    avatar: {
        type: String,
        default: ""
    },
    refreshToken: {
        type: String
    }
}, { timestamps: true })

// Pre-save hook to hash password if modified
UserSchema.pre("save", async function (next) {
    // Check if password is modified
    if (this.isModified("password")) {
        // Hash the password using bcrypt with a salt factor of 10
        this.password = await bcrypt.hash(this.password, 10);
        next()
    }
    else {
        return next();
    }
})

// Method to check if the given password matches the hashed password
UserSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

// Method to generate an access token using JWT
UserSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

// Method to generate an refresh token using JWT
UserSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        }
    )
}

export const User = mongoose.model("User", UserSchema);
