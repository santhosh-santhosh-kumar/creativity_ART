const artWorkModel=require('../Models/artwork.models')


//get methode - all

const getGallary=async (req,res)=>{
     try{

     }catch(err){
      res.status(500).send(err.message)
    }
}


//get methode - single
const getSingleGallary=async (req,res)=>{
      try{

      }catch(err){
       res.status(500).send(err.message)
     }
}


//post methode

const postGallary=async (req,res)=>{
    const files=req.files
    try{
     const postArt=new artWorkModel({
      main_title:req.body.main_title,
      sub_title: req.body.sub_title,
      style: req.body.style,
      year: req.body.year,
      url:`localhost:3001/Images/Artwork/${files.filename}`
     })
      await postArt.save()
      res.status(200).json({postArt})
    }catch(err){
      res.status(500).send(err.message)
    }
}

//put methode

const updateGallary=async (req,res)=>{
      try{

      }catch(err){
       res.status(500).send(err.message)
     }
}


//delete methode


const deleteGallary=async (req,res)=>{
      try{

      }catch(err){
       res.status(500).send(err.message)
     }
}

module.exports={
      getGallary,
      getSingleGallary,
      postGallary,
      updateGallary,
      deleteGallary
}