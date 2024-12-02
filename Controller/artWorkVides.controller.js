const artWorkVideosModel=require('../Models/artWorkVides.models');
const {ObjectId}=require('mongodb')

//get methode - all

const getVideos = async (req, res) => {
      try {
        const findVideo = await artWorkVideosModel.find();
        res.status(200).json(findVideo);
      } catch (err) {
        res.status(500).send(err.message);
      }
    };
    
    //get methode - single
    const getSingleVideo = async (req, res) => {
      try {
        const findSingleVideo = await artWorkVideosModel.findById({ _id: req.params.id });
        res.status(200).json(findSingleVideo);
      } catch (err) {
        res.status(500).send(err.message);
      }
    };
    
    //post methode
    
    const postVideos = async (req, res) => {
      const file = req.file;
      try {
        const postArt = new artWorkVideosModel({
          main_title: req.body.main_title,
          sub_title: req.body.sub_title,
          style: req.body.style,
          year: req.body.year,
          url: `localhost:3001/Images/ArtVideos/${file.filename}`,
        });
        await postArt.save();
        res.status(200).json( postArt );
      } catch (err) {
        res.status(500).send(err.message);
      }
    };
    
    //put methode
    
    const updateVideos = async (req, res) => {
      try {
        const updateArt = await artWorkVideosModel.findByIdAndUpdate(
          { _id: req.params.id },
          { $set: req.body },
          { new: true }
        );
        if (!updateArt) {
          return res.status(404).json({ message: "Files not found" });
        }
        res.status(200).json(updateArt);
      } catch (err) {
        res.status(500).send(err.message);
      }
    };
    
    //delete methode
    
    const deleteVideos = async (req, res) => {
      try {
        await artWorkVideosModel.deleteOne({ _id: new ObjectId(req.params.id) });
        res.status(200).send("Deleted");
      } catch (err) {
        res.status(500).send(err.message);
      }
    };
    


module.exports = {
      getVideos,
      getSingleVideo,
      postVideos,
      updateVideos,
      deleteVideos,
    };