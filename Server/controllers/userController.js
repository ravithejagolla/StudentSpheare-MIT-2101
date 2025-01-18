
import { Student } from "../models/userSchema.js";
import jwt from 'jsonwebtoken'
import argon2 from'argon2';

export const signUp=async (req,res) => {
    const {username,studentid,password,email}=req.body

    if (!email.endsWith('@mit.edu')) {
        return res.status(400).json({ error: 'Only MIT Students are allowed' });
    }

    const hashpassword= await argon2.hash(password)
    const student=new Student({
        username:username,
        password:hashpassword,
        studentid:studentid,
        email:email
    })
    await student.save()
    res.status(200).json({
        msg:"student signup successfull",
        username:student.username,
        password:hashpassword
    })
}
export const login=async (req,res) => {
    const {username,password,email}=req.body
    const student=await Student.findOne({
        email
    })
    const jwtpassword=process.env.JWT_PASSWORD
    const iscorrectStudent=await argon2.verify(student.password,password)
    if(iscorrectStudent){
        const token=jwt.sign({
            id:student.__id,
            username:student.username,
        },jwtpassword,
    { expiresIn: '24h' })

        res.status(201).json({
            msg:"student logged in successfully",
            token
        })
    }else{
        res.status(401).json({
            msg:"student is Unauthorised"
        })
    }
}