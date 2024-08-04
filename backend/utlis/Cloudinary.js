import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,

});

const uploadOnCloudniary = async (LocalFilePath) => {
    try {
        if (!LocalFilePath) return null

        // upload file on cloudniary 
        const response = await cloudinary.uploader.upload(LocalFilePath, {
            resource_type: 'auto'
        })

        // console.log(response);

        // file is uploaded successfull
        // console.log("File is uploaded successfull " , response.url);

        // unlink when success 
        fs.unlinkSync(LocalFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(LocalFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}

export default uploadOnCloudniary    