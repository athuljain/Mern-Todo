

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


// Sign in
router.post("/login", async (req, res) => {
    try {
       const user = await User.findOne({ email: req.body.email });
       if (!user) {
           return res.status(400).json({ message: "User not found. Please sign up first." });
       }
       
       const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
       if (!isPasswordCorrect) {
           return res.status(400).json({ message: "Password incorrect." });
       }

       // If password is correct, send user data (excluding password) in response
       const { password, ...others } = user._doc;
       res.status(200).json({ user: others });
    } catch (error) {
        res.status(500).json({ message: "Internal server error." });
    }
});



module.exports = router;
