const express=require('express');
const userController=require('../Controller/login.controller');
const route=express.Router()

route.post('/',userController.postUser)

module.exports=route