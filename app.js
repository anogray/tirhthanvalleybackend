import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config.js";
import property from "./routes/propertyRoute.js";


const app = express();

dotenv.config()
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

mongoose.connect(config.DB_URL ,  
    { useNewUrlParser: true , useUnifiedTopology: true }, (err)=>{
    
    if(err) return console.error(err);
    
    console.log("Connected to MongoDb");
    });

app.get("/",(req,res)=> res.status(200).json({success:true}));

app.use("/property",property);

app.listen(PORT, () => {
    console.log(`The application is running on localhost ${PORT}`);
});
