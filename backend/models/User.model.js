import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    
},{timestamps:true})

export const User = mongoose.model("User" , UserSchema);