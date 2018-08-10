// import express and other packages
const express = require("express");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");

// initiate router from express
const router = express.Router();

// Load user model
const User = require("../../models/User");

/**
 * @route   GET localhost:5000/api/users
 * @desc    Tests users route
 * @access  Public
 */
router.get("/test", (req, res) => res.json({ msg: "Users works" }));

/**
 * @route   GET localhost:5000/api/users/register
 * @desc Register a user
 * @access Public
 */
router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", //size
        r: "pg", // Rating
        d: "mm" // default
      });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar: avatar,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

module.exports = router;
