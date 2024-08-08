import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { companyRegistration } from "../controllers/Company.controller.js";


const router = Router()

router.route("/compRegister").post(verifyJWT, companyRegistration)

export default router
