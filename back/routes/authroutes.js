import express from "express"
import rateLimit from "express-rate-limit"
import {  sentOTP } from "../controllers/authcontroller.js"


const router = express.Router()

// router.post("/signup/user" ,  signup );
// router.post("/login/user" , login );

router.post('/getOTP/user' ,  sentOTP );

export default router;