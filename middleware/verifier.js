const jwt=require('jsonwebtoken');

const User=require("../userSchema/user");


//every visit refreshes token for 30 days
///sending new token in res.locals.jwt to next middleware
//module sends no response



module.exports=(req,res,next)=>{
    let accessToken=req.headers.token;
 
    if(!accessToken)
    {
        res.status(401).json("user unauthorized");
    
    }
    else{
       let payload;
        try{
            
            payload = jwt.verify(accessToken, process.env.jwt_secret);
           
            User.findOne({email:payload.email},(err,foundUser)=>{
                if(foundUser)
                {
                    console.log(payload);
                    payload.exp=payload.exp+2592000000;
                    let newToken=jwt.sign(payload,process.env.jwt_secret,{algorithm:'HS256'});
                    res.locals.token=newToken;
                    res.locals.email=payload.email;
                    next();
                }
            });
            
        }
        catch(e){
            //if an error occured return request unauthorized error
            return res.status(401).send("Unauthorized user");
        }
    
        }
}