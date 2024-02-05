const express = require("express");

const { userLogin, userRegister } = require("../contoller/user");
const router = express.Router();

router.post("/login", userLogin);
router.post("/register", userRegister);

module.exports = router;
