import * as dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";

mongoose.connect(process.env.DB);
let db = mongoose.connection;


export default db;