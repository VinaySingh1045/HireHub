import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();

app.use(cors({
    origin: ["http://localhost:5173", "https://hirehub-two.vercel.app"],
    credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// writing router from here 
import router from "../routes/User.route.js";
import compRouter from "../routes/Company.route.js";
import jobRouter from "../routes/Job.route.js";
import appliRouter from "../routes/Application.route.js"
import adminRouter from "../routes/Admin.route.js";

app.use("/api/v1/users/", router)
app.use("/api/v1/company/", compRouter)
app.use("/api/v1/job/", jobRouter)
app.use("/api/v1/application/", appliRouter)
app.use("/api/v1/admin/", adminRouter)

export default app 
