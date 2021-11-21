import express from "express";
import mongoose from "mongoose";
import axios from "axios";
import Property from "../models/placeModel.js";

const router = express.Router();

router.post("/create", async(req,res)=>{

    // console.log("gotData", req.body);

    const newProperty = await Property.create(req.body);
    console.log("result",newProperty);
    return res.status(201).json({success:true})
})

router.get("/", async(req,res)=>{

    const {propertyName} = req.query;
    console.log("gotProperty",propertyName);
    if(!propertyName){
        throw Error("Need Property Name !")
    }

    try{
        
       const properyDetails = await Property.findOne({placeName:propertyName})
       if(!properyDetails){
        throw Error("Property doesn't exists!")
       }
       return res.status(200).json({status:true, dataMessage:properyDetails});


    }catch(err){
        console.log("gotErrorPropertyName",err.message);
        return res.status(200).json({status:false, errorMessage:err.message});
    }
})


export default router;