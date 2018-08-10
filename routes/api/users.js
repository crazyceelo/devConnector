// import express
const express = require("express");

// initiate router from express
const router = express.Router();

//localhost:5000/api/users
router.get("/test", (req, res) => res.json({ msg: "Users works" }));

module.exports = router;
