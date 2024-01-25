const mongoose = require("mongoose");

// Create a Mongoose schema and model for the user
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // confirmPassword: {
  //   type: String,
  //   required: true,
  // },
  todo: [
    {
      text: String,
      completed: Boolean,
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
