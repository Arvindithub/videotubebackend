//require('dotenv').config({path:'./env'})
import { app } from "./app.js";
import dotenv from "dotenv"
import connectDB from "./db/db.js";

dotenv.config({
    path:'./.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port :${process.env.PORT}`)
    })
})
.catch((err)=>{
console.log("mongodb connection failed !!!", err)
})







/*
import express from "express"
const app=express()
// function connectdb(){}

// connectdb()


(async()=>{
try {
 await Mongoose.connect(`{process.env.MONGODB_URI}/{DB_NAME}`) 
 app.on("error",(error)=>{
    console.log("ERR",error);
 })
 app.listen(process.env.PORT,()=>{
    console.log(`App is listening on port ${process.env.PORT}`);
 })
} catch (error) {
   console.log("error",error) 
}
})()
*/