import mongoose from "mongoose";

const appschema = new mongoose.Schema({
  userid : {type: String },
  docid : {type : String },
  date : {type : String},
  time : {type : String},
  price : {type : String},
},{timestamps:true});

export default mongoose.model("Appsc", appschema);