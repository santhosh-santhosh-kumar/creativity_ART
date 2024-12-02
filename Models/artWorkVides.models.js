const { Schema, model } = require("mongoose");

const schema = new Schema({
  id:{type:Number},
  main_title: { type: String, require: true },
  sub_title: { type: String, require: true },
  style: { type: String },
  year: { type: Number },
  url: { type: String, require: true},
});

const artWorkVideosModel = model('artWorkVideos', schema);

module.exports = artWorkVideosModel;