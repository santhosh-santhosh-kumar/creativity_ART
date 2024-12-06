const express=require('express');
const userController=require('../Controller/artWorkVides.controller');
const route=express.Router();
const upload=require('../Multer/artWorkVides.multer');

route.get('/',userController.getVideos)
route.get('/:id',userController.getSingleVideo)
route.post('/',upload.single('url'),userController.postVideos)
route.put('/:id',userController.updateVideos)
route.delete('/:id',userController.deleteVideos)

module.exports=route