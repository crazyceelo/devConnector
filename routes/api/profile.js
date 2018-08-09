const express = require("express");
const router = express.Router();

//localhost:5000/api/profile
router.get("/test", (req, res) => res.json({ msg: "Profile works" }));

module.exports = router;
