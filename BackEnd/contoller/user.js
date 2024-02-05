// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../model/userModel");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

const userRegister = async (req, res) => {
  const { email, password, userName } = req.body;

  try {
    const user = await User.signup(email, password, userName);
    const token = createToken(user._id);
    res.status(200).json({ userName, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    const userName = user.userName;
    res.status(200).json({ userName, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  userRegister,
  userLogin,
};
