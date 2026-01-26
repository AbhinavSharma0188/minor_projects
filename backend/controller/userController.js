import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../model/Usermodel.js";

dotenv.config();
export const userSignUp=async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(400).json({message:"All fields are required"})
    }
    const user=await User.findOne({email});
    if(user){
        return res.status(400).json({message:"User already exists"})
    }
    const hashedPassword=await bcrypt.hash(password,10);
    const newUser=await User.create({email,password:hashedPassword})
    const token=jwt.sign({
        email,id:newUser._id
    },process.env.JWT_SECRET,{expiresIn:"15d"}
    );
    res.status(201).json({token,newUser})
   
    

    
}
export const userLogin= async(req,res)=>{
     const {email,password}=req.body;
    if(!email || !password){
        return res.status(400).json({message:"All fields are required"})
    }
    const user= await User.findOne({email});
    if(user&& await bcrypt.compare(password,user.password))
    {
        const token=jwt.sign({
        email,id:user._id
    },process.env.JWT_SECRET,{expiresIn:"15d"}
    );
    res.status(201).json({token,user})
    }
    else{
        return res.status(400).json({message:"Invalid credentials"})

    }
    
}
export const getUser= async (req,res)=>{
    const user =await User.findById(req.params.id);
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    res.status(200).json({email:user.email})
    
}