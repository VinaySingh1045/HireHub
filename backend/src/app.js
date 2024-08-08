import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));
app.use(cookieParser());

// writing router from here 
import router from "../routes/User.route.js";
import compRouter from "../routes/Company.route.js";

app.use("/api/v1/users/", router)
app.use("/api/v1/company/", compRouter)

export default app 
