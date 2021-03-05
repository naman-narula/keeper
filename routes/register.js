const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');
const User=require('../userSchema/user');

router.post("/register",(req,res)=>{
    
    let userName=req.body.email;
    let password=req.body.password;
    let hashedPwd=bcrypt.hashSync(password,10);
    let newUser=new User({
        name:req.body.name,
        email:userName,
        password:hashedPwd,
        notes:[]

    });
    newUser.save((err)=>{
        if(!err)
        {
            res.status(200).json("user Saved");
        }
        else{
            res.status(400).json("user exists or incomplete data");
        }
    });
    
    
    
    
});
module.exports=router;