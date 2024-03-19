

const router = require('express').Router();
const User = require("../Models/user");
const bcrypt = require("bcrypt");

// Sign up
router.post('/register', async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const hashPassword = bcrypt.hashSync(password, 10); // Hash the password

        const user = new User({ email, username, password: hashPassword }); // Store the hashed password

        await user.save();
        res.status(200).json({ user });
    } catch (error) {
        res.status(400).json({ message: "User already exists" });
    }
});

module.exports = router;
