import {  Router } from "express";
import { userLogin, userLogout, userRegistration } from "../controllers/User.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

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
router.route("/logout").post(verifyJWT,userLogout)

export default router    