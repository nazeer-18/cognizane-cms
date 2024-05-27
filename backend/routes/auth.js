const express = require('express');
const authRouter = express.Router();
const User = require('../models/User');

//login
authRouter.post('/login',async (req,res)=>{
    try{
        const {userName,password} = req.body;
        const user = await User.findOne({
            userName : userName,
            password : password
        })
        if(user){
            return res.status(200).json({success:true,message:'Login successful'});
        }
        return res.status(400).json({success:false,message:'Invalid credentials'});
    }catch(err){
        res.json({success:false,message:'Login failed'});
        console.log(err);
    }
})

//register
authRouter.post('/register',async (req,res)=>{
    try{
        const {userName,password} = req.body;
        const user = await User.findOne({
            userName:userName
        })
        if(user){
            return res.status(400).json({success:false,message:'User already exists'});
        }
        const newUser = new User({
            userName:userName,
            password:password
        })
        await newUser.save();
        return res.status(201).json({success:true,message:'User created successfully'});
    }
    catch(err){
        res.json({success:false,message:'User creation failed'});
        console.log(err);
    }

})

module.exports = authRouter;