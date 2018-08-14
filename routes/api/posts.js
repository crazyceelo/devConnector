// import express
const express = require("express");

// initiate router from express
const router = express.Router();

// import DB
const mongoose = require("mongoose");

// protect some routes
const passport = require("passport");

// import post model
const Post = require("../../models/Post");

// import post validation
const validatePostInput = require("../../validation/post");

/**
 * @route   GET localhost:5000/api/posts
 * @desc    Tests posts route
 * @access  public
 */
router.get("/test", (req, res) => res.json({ msg: "Posts works" }));

/**
 * @route   POST localhost:5000/api/posts
 * @desc    Create post
 * @access  private
 */

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    // check validation
    if (!isValid) {
      // if any errors, send 400 with errors object
      return res.status(404).json(errors);
    }

    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id
    });

    newPost.save().then(post => res.json(post));
  }
);
module.exports = router;
