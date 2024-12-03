const { Schema, model } = require("mongoose");

const schema = new Schema({
  userName: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String },
});

const registerModel = model('register', schema);

module.exports = registerModel;