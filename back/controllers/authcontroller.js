import mongoose from "mongoose"
import randToken from 'rand-token';
import jwt from "jsonwebtoken"
import nodemailer from "nodemailer"
import dotenv from "dotenv"
// import User from "../models/User.js"
import Otp from "../models/Otp.js"


export const sentOTP = async(req, res) => {

    const {email } = await req.body;

    const OTP = randToken.generate(6);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'flashpostmail@gmail.com',
            pass: "hxzlsowcdvwheybt",
        }
    });

    const mailOptions = {
        from: 'flashpostmail@gmail.com',
        to: email,
        subject: 'OTP for HealthByte',
        text: `Your OTP is ${OTP}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.send({error: error})
        } else {
            console.log('Email sent: ' + info.response);
            res.send({OTP: OTP})
        }
    });

    await Otp.create({otp: OTP, email: email})


}
