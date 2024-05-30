const express = require('express');
const domainRouter = express.Router();
const Domain = require('../models/Domain');

domainRouter.get('/getDomains',async (req,res)=>{
    try{
        const domains = await Domain.find({});
        res.status(200).json({domains,success:true, message:"Domains fetched successfully"});
    }
    catch(err){
        res.status(500).json({message:err.message,success:false});
    }
})

domainRouter.post('/addDomain',async (req,res)=>{
    try{
        const domain = new Domain({
            domainName:req.body.domainName,
            domainId:req.body.domainId,
            domainDescription:req.body.domainDescription,
            domainLogo:req.body.domainLogo
        }); 
        const isExist = await Domain.findOne({
            domainName:req.body.domainName,
            domainId:req.body.domainId,
        });
        if(isExist){
            res.status(400).json({message:"Domain already exist",success:false});
        }
        else{
            const newDomain = await domain.save();
            res.status(201).json({message:"Domain added successfully",success:true,newDomain});
        }
    }
    catch(err){
        res.status(500).json({message:err.message,success:false});
    }
})

module.exports = domainRouter;