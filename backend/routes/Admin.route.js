import { Router } from "express";
import { isAdmin, verifyJWT } from "../middlewares/auth.middleware.js";
import { getAllEmployerUsers, getAllUsers, getPendingCompanies, getPendingJobs, updateCompanyStatus, updateJobStatus } from "../controllers/Admin.controller.js";


const router = Router()

router.route("/getPendingCompany").get(verifyJWT, isAdmin, getPendingCompanies)
router.route("/status/:id/updateCompanyStatus").put(verifyJWT, isAdmin, updateCompanyStatus)
router.route("/getPendingJob").get(verifyJWT, isAdmin, getPendingJobs)
router.route("/status/:id/updateJobStatus").put(verifyJWT, isAdmin, updateJobStatus)
router.route("/getAllUsers").get(verifyJWT, isAdmin, getAllUsers)
router.route("/getAllEmployerUsers").get(verifyJWT, isAdmin, getAllEmployerUsers)

export default router