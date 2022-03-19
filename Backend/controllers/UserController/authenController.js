const express = require("express");
const catchAsyncErrors = require("../../middleware/catchAsyncErrors");
const User = require("../../models/UserModel");
const router = express.Router();
const {
  validator,
  registreRules,
  loginRules,
} = require("../../middleware/validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isAuth = require("../../middleware/isAuth");

// Athentification

// Register User

exports.registerUser =
  ([registreRules, validator],
  async (req, res) => {
    const { name, cin, tel, type, email, password } = req.body;
    try {
      //check user exist
      const foundUser = await User.findOne({ email });
      if (foundUser) {
        res.status(400).send({ errors: [{ msg: "email is already exist " }] });
      }

      const user = new User({
        name,
        cin,
        tel,
        type,
        email,
        password,
      });

      // Hash password
      const salt = 10;
      const hashPassword = await bcrypt.hash(password, salt);
      user.password = hashPassword;
      await user.save();

      // token
      const payload = {
        id: user._id,
      };
      const token = jwt.sign(payload, process.env.SNCFTDB, { expiresIn: "1d" });
      res.send({ user, token });
    } catch (error) {
      res.status(500).send(`Server Error ${error}`);
    }
  });

// Login User
exports.loginUser=([loginRules, validator], async (req, res) => {
  const { email, password } = req.body;
  try {
    //check user exist

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ errors: [{ msg: " Invalid Email" }] });
    }
    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ errors: [{ msg: "Invalid Password " }] });
    }

    //token
    const payload = {
      id: user._id,
    };
    const token = jwt.sign(payload, process.env.mysecret, {
      expiresIn: "1d",
    });
    res.send({ user, token });
  } catch (error) {
    res.status(500).send(`Server Error ${error}`);
  }
});



// Logout User
exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
  
    res.status(200).json({
      success: true,
      message: "Logged Out",
    });
  });
  

module.exports = router;
