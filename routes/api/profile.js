// import express
const express = require("express");

// initiate router from express
const router = express.Router();

/**
 * @route   GET localhost:5000/api/profile
 * @desc    Tests profile route
 * @access  public
 */
router.get("/test", (req, res) => res.json({ msg: "Profile works" }));

module.exports = router;
