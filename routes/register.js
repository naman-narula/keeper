const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');
const User=require('../userSchema/user');
const jwt=require('jsonwebtoken');

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
            let payload={email:req.body.email}
            const token=jwt.sign(payload,process.env.jwt_secret,{algorithm:'HS256',expiresIn:'30d'})
            res.status(200).json(token);
        }
        else{
            console.log(err);
            res.status(400).json("user exists or incomplete data");
            
        }
    });
    
    
    
    
});
module.exports=router;