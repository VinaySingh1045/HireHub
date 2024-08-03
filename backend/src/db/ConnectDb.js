import mongoose from "mongoose";

const ConnectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Connection Successfull");
    } catch (error) {
        console.log("Connection failed" , error);
        process.exit(1);
    }
}

export default ConnectDb