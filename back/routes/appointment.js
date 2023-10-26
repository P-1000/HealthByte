import express from "express"
import user from "../models/user.js"

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

router.post("/login", (req,res) => {
    const {uid , email , name , phonenumber} = req.body
    try {
        if(!uid || !email || !name || !phonenumber){
            return res.status(400).json({message:"All fields are required"})
        }
        const token = jwt.sign({_id:savedUser._id},"heybro")
        user.findOne({email}).then((savedUser) => {
            if(savedUser){
                return token;
            }

            const newUser = new user({
                uid,
                email,
                name,
                phonenumber
            })

            newUser.save().then((user) => {
                return token;   
            }).catch((err) => {
                console.log(err)
                res.status(500).json({message:"Something went wrong"})
            })
        })
    } catch (error) {
        res.status(500).json({message:"Something went wrong"})
    }
})




export default router;