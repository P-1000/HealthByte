
import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false, 
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  speciality: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
  },
  workingHours: {
    type: [String],
  },
  education: {
    type: [String],
  },
  certifications: {
    type: [String],
  },
  experience: {
    type: Number,
  },
    profilePic: {
        type: String,
    },
    bio: {
        type: String,
    }
});

export default mongoose.model("Doctor", doctorSchema);
