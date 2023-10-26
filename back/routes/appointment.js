import express from "express"
import User from "../models/user.js"
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import Appsc from "../models/App.js";


const router = express.Router()


router.post('/newapp' , async(req,res) => {
    const {data} = req.body
    try {
        if(!data){
            return res.status(400).json({message:"All fields are required"})
        }
        const newapp = await new Appsc({
            userid : data.patientId,
            docid : data.doctorId,
            data : data.selectedDate,
            time : data.selectedSlot,
            price : data.selectedSlotPrice,
        })
       await newapp.save()
        res.status(200).json({message:"Appointment booked successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Something went wrong"})
    }
}
)

router.post("/login", async (req, res) => {
    const { usermain } = req.body;
    try {
        if (!usermain.uid) {
            return res.status(400).json({ message: "All fields are required" }); // Use 'return' to exit the function after sending a response
        }
        const existingUser = await User.findOne({ userid: usermain.uid });

        if (existingUser) {
            const token = jwt.sign({ id: existingUser._id }, 'yowaimo', { expiresIn: '10d' });
            return res.status(200).json({ token }); 
        } else {
            const newUser = new User({
                name: usermain.name,
                email: usermain.email,
                mobile: usermain.mobile,
                userid: usermain.uid,
            });
            await newUser.save();
            const token = jwt.sign({ id: newUser._id }, 'yowaimo', { expiresIn: '10d' });
            return res.status(200).json({ token }); 
        }
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});



export default router;