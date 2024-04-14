import  mongoose  from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB= async ()=>{

try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n MongoDB connect !! DB HOST :${mongoose.connection.host}`);
} catch (error) {
    console.log("Mongodb connection eror",error)
    process.exit(1)
}

}

export default connectDB;