import express from 'express'
import dotenv from 'dotenv'
import ConnectDb from './db/ConnectDb.js';
dotenv.config();
import app from "./app.js";
const port = process.env.PORT

ConnectDb()

.then(()=>{
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})
.catch((error)=>{
  console.log("mongoDb Connection Failed" , error);
})
  
