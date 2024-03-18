const router=require('express').Router();

const user = require('../Models/user');
const User=require("../Models/user")

//Sign in

router.post('/register',async(req,res)=>{
    try{
        const {email,username,password}=req.body 

        const user=new  User({email,username,password});
        {email:email}

        await user.save().then(()=>{
            res.status(200).json({user:user})
        })



    }catch(error){

        res.status(400).json({messsage:"user already exist"})
    }
})


module.exports=router;