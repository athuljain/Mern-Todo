const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const schema = require('../model/userModel')


const userRegister = async (req, res) => {
    try {
      const { name, email, password, confirmPassword } = req.body;
  
      if (password !== confirmPassword) {
        return res.status(400).send("Passwords do not match");
      }
  
      const userExists = await schema.findOne({ email }); // Check if user already exists
      if (userExists) {
        return res.status(400).send("User already exists");
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new schema({ name, email, password: hashedPassword });
      await user.save();
      res.status(201).send("User registered successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send("Registration failed");
    }
  };


  module.exports={
    userRegister,
  }