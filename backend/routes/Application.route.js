import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { applyJob, getApplicant, getAppliedJob, updateStatus } from "../controllers/Application.controller.js";

const router = Router()

router.route("/applyJob/:id").get(verifyJWT,applyJob)
router.route("/getAppliedJob").get(verifyJWT,getAppliedJob)
router.route("/:id/getApplicant").get(verifyJWT,getApplicant)
router.route("/status/:id/updateStatus").put(verifyJWT,updateStatus)

export default router