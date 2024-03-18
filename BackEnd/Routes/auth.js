const router=require('express').Router();

// const user = require('../Models/user');
const User=require("../Models/user")
const bycrypt=require("bcrypt")


//Sign in
const router = require('express').Router();
const User = require("../Models/user");
const bcrypt = require("bcrypt");

// Sign in
router.post('/register', async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const hashPassword = bcrypt.hashSync(password);

        const user = new User({ email, username, password: hashPassword });

        await user.save();
        res.status(200).json({ user: user });
    } catch (error) {
        res.status(400).json({ message: "User already exists" });
    }
});

module.exports = router;






module.exports=router;