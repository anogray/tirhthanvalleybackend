import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config.js";


const app = express();

dotenv.config()
app.use(cors());
app.use(express.json());

mongoose.connect(config.DB_URL ,  
    { useNewUrlParser: true , useUnifiedTopology: true }, (err)=>{
    
    if(err) return console.error(err);
    
    console.log("Connected to MongoDb");
    });

app.get("/",(req,res)=> res.status(200).json({success:true}));

app.listen(process.env.PORT, () => {
    console.log('The application is running on localhost 4000');
});
