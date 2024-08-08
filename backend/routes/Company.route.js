import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { companyRegistration, getCompany, getCompanyById, updateCompany } from "../controllers/Company.controller.js";
import { upload } from "../middlewares/multer.middleware.js";


const router = Router()

router.route("/compRegister").post(verifyJWT, companyRegistration)
router.route("/getCompany").get(verifyJWT, getCompany)
router.route("/getCompanyById/:id").get(verifyJWT, getCompanyById)
router.route("/updateCompany/:id").put(verifyJWT, upload.single("logo") , updateCompany)

export default router
