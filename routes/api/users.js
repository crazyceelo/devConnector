const express = require("express");
const router = express.Router();

//localhost:5000/api/users
router.get("/test", (req, res) => res.json({ msg: "Users works" }));

module.exports = router;
