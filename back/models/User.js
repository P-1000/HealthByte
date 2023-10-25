import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true , unique: true},
    ProfilePic: {
        type: String,
    },
    Location: {
        type: String,
    },
    age: {
        type: Number,
    },
    height: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    bg: {
        type: String,
    },
    mobile: {
        type: Number,
    },
    dob: {
        type: String,
    },
    medicalHistory: {
        type: String,
    },
    appointment_history: {
        type: String,
    },
    appointment_upcoming: {
        type: String,
    },
    otp: {
        type: Number,
    },

},{timestamps:true});

export default mongoose.model("User", userSchema);