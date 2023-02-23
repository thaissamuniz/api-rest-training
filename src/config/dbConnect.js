import mongoose from "mongoose";

mongoose.connect("mongodb+srv://thaissamuniz:uU5YX6CTaiqNQ8zI@cluster0.s8cswx2.mongodb.net/alura-node");
let db = mongoose.connection;


export default db;