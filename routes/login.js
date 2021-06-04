const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');

const jwt=require('jsonwebtoken');
const User=require("../userSchema/user");
router.post("/login",(req,res)=>{
    User.findOne({email:req.body.email},(err,foundUser)=>{
        if(err)
        {
            res.status(404).json("User does not exist");

        }
        if(foundUser)
        {
            let payload={email:req.body.email}

           let result=bcrypt.compareSync(req.body.password,foundUser.password);
           if(result)
           {
               let token=jwt.sign(payload,process.env.jwt_secret,{algorithm:'HS256',expiresIn:'30d'});
              
               res.status(200).json(token);


           }
           else
           {
               res.status(401).json("wrong password");
           }
            
        }
    })
});
module.exports=router;