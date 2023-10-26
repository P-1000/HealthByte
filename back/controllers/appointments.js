import mongoose from "mongoose"
import randToken from 'rand-token';
import jwt from "jsonwebtoken"
import nodemailer from "nodemailer"
import dotenv from "dotenv"
import User from "../models/user.js"


export const register = async (req,res) => {
    