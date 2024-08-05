import {  Router } from "express";
import { userLogin, userRegistration } from "../controllers/User.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }
    ])
    , userRegistration)

router.route("/login").post(userLogin)    

export default router    