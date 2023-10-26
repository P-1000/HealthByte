import express from "express"
import user from "../models/user.js"
import mongoose from "mongoose";
import jwt from "jsonwebtoken";


const router = express.Router()


router.post('/newapp' , (req,res) => {
    const {data} = req.body
    try {
        if(!data){
            return res.status(400).json({message:"All fields are required"})
        }
        const newapp = new user(data)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Something went wrong"})
    }
}
)

router.post("/login", async (req,res) => {
    const {usermain} = req.body
    try {
        if(!usermain.uid){
            res.send(400).json({message:"All fields are required"})
        }
        const user = await user.findOne({uid:usermain.uid})
        const jwt = jwt.sign({id:user._id},'yowaimo' , {expiresIn:"10d"})
        if(user){
            return res.status(200).json(jwt)
        }
        else{
            const newuser = await new user(usermain)
            await newuser.save()
            res.status(200).json(jwt)
        }

    } catch (error) {
        res.status(500).json({message:"Something went wrong"})
    }


    console.log(usermain.uid)

})




export default router;