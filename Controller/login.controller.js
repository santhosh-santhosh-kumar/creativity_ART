const { ObjectId } = require("mongodb");
const userModel = require("../Models/register.models");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");
//get methode - all


//post methode

const postUser = async (req, res) => {
 
      try {
            if(!req.body.email||!req.body.password){
                  return res.status(400).send('Please Enter Email and Password')
                  }
       
            const user = await userModel.findOne({ email: req.body.email });
            if (user) {
              const password = await bcrypt.compareSync(
                req.body.password,
                user.password
              )
              if (password) {
                const token=jwt.sign({id:user._id},process.env.SECRET_KEY,{expiresIn:"1h"})
                res.json({
                  message:"login success"          
                });
                console.log(token)
              } else {
                res.status(400).json({ message: "password wrong" });
              }
            } else {
              res.status(400).json({ message: "user not found" });
            }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//put methode


module.exports = {
  postUser,
};
