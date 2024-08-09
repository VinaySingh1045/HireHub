import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { addJobs, getAdminJobs, getAllJobs, getJobById } from "../controllers/Job.controller.js";

const router = Router()

router.route("/addJobs").post(verifyJWT, addJobs)
router.route("/getAllJobs").get(verifyJWT, getAllJobs)
router.route("/getJobById/:id").get(verifyJWT, getJobById)
router.route("/getAdminJobs").get(verifyJWT, getAdminJobs)

export default router