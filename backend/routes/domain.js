const express = require('express');
const domainRouter = express.Router();
const Domain = require('../models/Domain');

//fetch all domains
domainRouter.get('/getDomains',async (req,res)=>{
    try{
        const domains = await Domain.find({});
        res.status(200).json({domains,success:true, message:"Domains fetched successfully"});
    }
    catch(err){
        res.status(500).json({message:err.message,success:false});
    }
})

//find domain by id
domainRouter.post('/getDomainById',async (req,res)=>{
    try{
        const domain = await Domain.findById(req.body.id);
        if(domain){
            res.status(200).json({domain,success:true, message:"Domain fetched successfully"});
        }
        else{
            res.status(404).json({message:"Domain not found",success:false});
        }
    }
    catch(err){
        res.status(500).json({message:err.message,success:false});
    }
})


//add a domain
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

//update a domain skills
domainRouter.post('/updateDomainSkills',async (req,res)=>{
    try{
        const domain = await Domain.findById(req.body.id);
        if(domain){
            const domainSkills = req.body.domainSkills;
            domain.domainSkills.push(domainSkills);
            const updatedDomain = await domain.save();
            res.status(200).json({updatedDomain,success:true, message:"Domain skills updated successfully"});
        }
        else{
            res.status(404).json({message:"Domain not found",success:false});
        }
    }
    catch(err){
        res.status(500).json({message:err.message,success:false});
    }
})


module.exports = domainRouter;