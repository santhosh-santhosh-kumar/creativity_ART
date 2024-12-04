const artWorkModel = require("../Models/artwork.models");
const {ObjectId} =require('mongodb')
//get methode - all

const getGallary = async (req, res) => {
  try {
    const findArt = await artWorkModel.find();
    res.status(200).json(findArt);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//get methode - single
const getSingleGallary = async (req, res) => {
  try {
    const findSingleArt = await artWorkModel.findById({ _id: req.params.id });
    res.status(200).json(findSingleArt);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//post methode

const postGallary = async (req, res) => {
  console.log(req.file)
  const file = req.file;
  try {
    const postArt = new artWorkModel({
      main_title: req.body.main_title,
      sub_title: req.body.sub_title,
      style: req.body.style,
      year: req.body.year,
      url: `localhost:3001/Images/Artwork/${file.filename}`,
    });
    await postArt.save();
    res.status(200).json( postArt );
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//put methode

const updateGallary = async (req, res) => {
  try {
    const updateArt = await artWorkModel.findByIdAndUpdate(
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

const deleteGallary = async (req, res) => {
  try {
    await artWorkModel.deleteOne({ _id: new ObjectId(req.params.id) });
    res.status(200).send("Deleted");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getGallary,
  getSingleGallary,
  postGallary,
  updateGallary,
  deleteGallary,
};
