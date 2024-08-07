import {  Router } from "express";
import { changeUserPassword, getCurrentUser, updateUserAccount, updateUserAvatar, updateUserResume, userLogin, userLogout, userRegistration } from "../controllers/User.controller.js";
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
router.route("/changePassword").post(verifyJWT,changeUserPassword)
router.route("/getCurrentUser").get(verifyJWT,getCurrentUser)
router.route("/updateDetails").put(verifyJWT,updateUserAccount)
router.route("/updateAvatar").put(verifyJWT,upload.single("avatar"),updateUserAvatar)
// router.route("/updateResume").put(verifyJWT,upload.single("resume"),updateUserResume)
router.route("/updateResume").put(verifyJWT, upload.single("resume"), updateUserResume);


export default router    