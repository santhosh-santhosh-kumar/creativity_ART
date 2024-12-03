const userModel = require("../Models/register.models");
const {ObjectId} =require('mongodb')
const bcrypt = require("bcrypt");
//get methode - all

const getUser = async (req, res) => {
  try {
    const findUser = await userModel.find();
    res.status(200).json(findArt);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//get methode - single
const getSingleUser = async (req, res) => {
  try {
    const findSingleUser = await userModel.findById({ _id: req.params.id });
    res.status(200).json(findSingleUser);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//post methode

const postUser = async (req, res) => {
const password=req.body.password

  const hash = await bcrypt.hash(password, 10);
  req.body.password = hash;

    try {
    const postUser = new userModel({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
    });
    console.log(postUser)
    await postUser.save();
    res.status(200).json( postUser );
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//put methode

const updateUser = async (req, res) => {
  try {
    const updateUser = await userModel.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!updateUser) {
      return res.status(404).json({ message: "Files not found" });
    }
    res.status(200).json(updateArt);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//delete methode

const deleteUser = async (req, res) => {
  try {
    await userModel.deleteOne({ _id: new ObjectId(req.params.id) });
    res.status(200).send("Deleted");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getUser,
  getSingleUser,
  postUser,
  updateUser,
  deleteUser,
};
