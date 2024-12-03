const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");
const dotenv=require('dotenv');



const authorize=(req,res,next)=>{
      if(req.headers.authorization){
        try{
          const verify=jwt.verify(req.headers.authorization,process.env.SECRET_KEY)
          if(verify){
            req.userId=verify.id
            next()
          }else{
            res.json({message:"unauthorized"})
          }
        }catch(error){
          res.json({message:"unauthorized"})
        }
    }else{
      res.json({message:"unauthorized"})
    }
    }
  

    module.exports={authorize}