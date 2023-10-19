const Mongoose = require("mongoose");

const UserSchema = new Mongoose.Schema({
  name: {
    type: String,
    require: true,
    minLength: 5,
    maxLength: 50,
  },
  email: {
    type: String,
    require: true,
    minLength: 5,
    maxLength: 255,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    minLength: 5,
    maxLength: 1024,
  },
});

module.exports = Mongoose.model("users", UserSchema);
