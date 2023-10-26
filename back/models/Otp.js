import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
    otp: {type: Number, required: true},
    email: {type: String, required: true },
},{timestamps:true});

export default mongoose.model("Otp", otpSchema);