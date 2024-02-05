const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(400).json({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);

    const user = await User.findById(_id); // Find user by MongoDB _id

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user; // Attach user to request object
    next();
  } catch (error) {
    res.status(400).json({ error: "Request is not authorized" });
  }
};

module.exports = requireAuth;
