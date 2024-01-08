const bcrypt = require('bcrypt');
const User = require('../model/user.model');
const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config()

const registerUser = async (req, res) => {
    const { name, email, password, avatar, } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: "User already exist, please login" });
        }

        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                res.status(404).json({ msg: err.message });
            } else {
                const user = new User({ name, email, password: hash, avatar });
                await user.save();
                res.status(201).json({ msg: "User registered successfully" });
            }
        })

    } catch (error) {

        res.status(500).json({ msg: error.message });
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ msg: "Please enter email and password" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "User does not exist" });
        }
        bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                const token = jsonwebtoken.sign({ email: user.email, userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5day' });
                res.cookie('token', token, { httpOnly: true }).status(200);
                res.status(201).json({ msg: "Login successful", token, user });
            } else {
                res.status(400).json({ msg: "Either email or password is incorrect!" });
            }
        })
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

module.exports = { loginUser, registerUser }