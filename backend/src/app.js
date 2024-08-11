import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));
app.use(cookieParser());

// writing router from here 
import router from "../routes/User.route.js";
import compRouter from "../routes/Company.route.js";
import jobRouter from "../routes/Job.route.js";
import appliRouter from "../routes/Application.route.js"

app.use("/api/v1/users/", router)
app.use("/api/v1/company/", compRouter)
app.use("/api/v1/job/", jobRouter)
app.use("/api/v1/application/", appliRouter)

export default app 
