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
        enum: [jobSeeker, employer]
    },
    profile: {
        bio: {
            type: String,
        },
        skills: [
            {
                type: String
            }
        ],
        resume: {
            type: String // url aayegi cloudnary ki
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
        }
    },
    refreshToken: {
        type: String
    }
}, { timestamps: true })


UserSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
        next()
    }
    else {
        return next();
    }
})

UserSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

UserSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: ACCESS_TOKEN_EXPIRY
        }
    )
}

UserSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: REFRESH_TOKEN_EXPIRY,
        }
    )
}

export const User = mongoose.model("User", UserSchema);
