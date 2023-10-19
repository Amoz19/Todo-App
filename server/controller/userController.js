const User = require("../models/UserModel");

const createUser = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already Register");

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  createUser,
};
