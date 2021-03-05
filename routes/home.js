const express=require('express');
const router=express.Router();
const User=require('../userSchema/user');
const verifier=require("../middleware/verifier");

//router.use(verifier);
router.get("/home/:email",(req,res)=>{
   
    User.findOne({email:req.params.email},(err,foundUser)=>{
        if(err)
        {
            res.json("User not found");
        }
        if(foundUser)
        {
            console.log("foundUser");
            res.json(foundUser.notes);
        }
    })

});
router.post("/home",(req,res)=>{
    User.findOne({email:req.body.email},(err,foundUser)=>{
        if(err)
        {
            res.json("User not found");
        }
        if(foundUser)
        {
            let note={
                title:req.body.title,
                content:req.body.content
            };
            foundUser.notes.push(note)
           foundUser.save();
           res.status(200).json("note saved");
        }  
    });
   
});


router.delete("/home",(req,res)=>{
    User.findOne({email:req.body.email},(err,foundUser)=>{
        if(err)
        {
            res.json('user not found');
        }
        else
        {
            foundUser.notes.splice(parseInt(req.body.index),1);
            foundUser.save();
            res.end("note Deleted")
        }

    })


});
module.exports=router;