import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { companyRegistration, getCompany, getCompanyById } from "../controllers/Company.controller.js";


const router = Router()

router.route("/compRegister").post(verifyJWT, companyRegistration)
router.route("/getCompany").get(verifyJWT, getCompany)
router.route("/getCompanyById/:id").get(verifyJWT, getCompanyById)

export default router
