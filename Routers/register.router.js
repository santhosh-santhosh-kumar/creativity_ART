const express=require('express');
const userController=require('../Controller/register.controller');
const upload=require('../Multer/artwork.multer');
const route=express.Router()

route.get('/',userController.getUser)
route.get('/:id',userController.getSingleUser)
route.post('/',userController.postUser)
route.put('/:id',userController.updateUser)
route.delete('/:id',userController.deleteUser)

module.exports=route