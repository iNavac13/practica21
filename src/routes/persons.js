const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
let Person=require('../models/persons');

router.get('/gente',async (req,res)=>{
    let data = await Person.find({}); 
    res.render('index', {data})
});

module.exports=router;