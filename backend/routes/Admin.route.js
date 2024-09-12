import { Router } from "express";
import { isAdmin, verifyJWT } from "../middlewares/auth.middleware.js";
import { getPendingCompanies, updateCompanyStatus } from "../controllers/Admin.controller.js";


const router = Router()

router.route("/getPendingCompany").get(verifyJWT, isAdmin, getPendingCompanies)
router.route("/status/:id/updateCompanyStatus").put(verifyJWT, isAdmin, updateCompanyStatus)

export default router