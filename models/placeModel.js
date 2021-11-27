import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    placeName:{type : String, required:true},
    category:{type:Array},
    facilities : {type : Object},
    state:{ type: String},
    village:{type:String},
    plusCode:{ type: String },
    pincode:{ type: String },
    mapLocation : { type: String },
    mapImgUrl : {type:String},
    imgs_url:{type:Array}
  });
  
  const Property = mongoose.model('Property', propertySchema);
  
  export default Property ;