// import express
const express = require("express");

// initiate router from express
const router = express.Router();

//localhost:5000/api/posts
router.get("/test", (req, res) => res.json({ msg: "Posts works" }));

module.exports = router;
