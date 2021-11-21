import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    facilities : {type : Object},
    stateLocation:{ type: String },
    city:{ type: String },
    pincode:{ type: String },
    mapLocation : { type: String }
  });
  
  const Property = mongoose.model('Property', propertySchema);
  
  export default Property ;