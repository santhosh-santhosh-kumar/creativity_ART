const express=require('express');
const userController=require('../Controller/artwork.controller');
const upload=require('../Multer/artwork.multer');
const route=express.Router()

route.get('/',userController.getGallary)
route.get('/:id',userController.getSingleGallary)
route.post('/',upload.single('artwork'),userController.postGallary)
route.put('/:id',userController.updateGallary)
route.delete('/:id',userController.deleteGallary)

module.exports=route