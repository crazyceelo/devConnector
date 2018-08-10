// import express
const express = require("express");

// initiate router from express
const router = express.Router();

/**
 * @route   GET localhost:5000/api/users
 * @desc    Tests users route
 * @access  public
 */
router.get("/test", (req, res) => res.json({ msg: "Users works" }));

module.exports = router;
