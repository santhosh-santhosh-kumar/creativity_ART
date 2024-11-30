const { Schema, models }=require('../Models/artwork.models')
//get methode - all

const getGallary=async (req,res)=>{
      res.send("creativity")
}


//get methode - single
const getSingleGallary=async (req,res)=>{
      res.send("creativity")
}


//post methode

const postGallary=async (req,res)=>{
    
}

//put methode

const updateGallary=async (req,res)=>{
      res.send("creativity")
}


//delete methode


const deleteGallary=async (req,res)=>{
      res.send("creativity")
}

module.exports={
      getGallary,
      getSingleGallary,
      postGallary,
      updateGallary,
      deleteGallary
}