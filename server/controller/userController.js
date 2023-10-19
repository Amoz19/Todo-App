const _ = require("lodash");
const bcrypt = require("bcrypt");
const User = require("../models/UserModel");

const createUser = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already Register");

  user = new User(_.pick(req.body, ["name", "email", "password"]));

  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user?.password, salt);
    await user.save();
    res.send(_.pick(user, ["_id", "name", "email", "password"]));
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  createUser,
};
