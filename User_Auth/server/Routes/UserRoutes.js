const express = require('express');
const router = express.Router();
const User = require('../models/Usermodel');

// Register a new user
router.post('/register', async (req, res) => {
    try {
        const { first_name, last_name, gender, email, password, address } = req.body;

        if (!first_name || !last_name || !gender || !email || !password || !address) {
            return res.status(400).json({ msg: "Please fill all the fields" });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "User already exists." });
        }

        // Create a new user
        const newUser = new User({ first_name, last_name, gender, email, password, address });
        await newUser.save();

        res.status(201).json({ msg: "User registered successfully" });

    } catch (error) {
        res.status(500).json({ msg: "Server error" });
    }
});

// Login user
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ msg: "Email and password are required." });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ msg: "User not found." });
        }

        if (password !== password) {
            return res.status(401).json({ msg: "Invalid credentials." });
        }

        res.status(200).json({ msg: "Login successful" });

    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
});

module.exports = router;
