import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { addJobs, addJobsByCompanyId, getAdminJobs, getAllJobs, getJobById, updateJob } from "../controllers/Job.controller.js";

const router = Router()

router.route("/addJobs").post(verifyJWT, addJobs)
router.route("/getAllJobs").get(getAllJobs)
router.route("/getJobById/:id").get(verifyJWT, getJobById)
router.route("/getAdminJobs").get(verifyJWT, getAdminJobs)
router.route("/updateJob/:id").put(verifyJWT, updateJob)
router.route("/addJobsByCompanyId/:id").post(verifyJWT, addJobsByCompanyId)

export default router