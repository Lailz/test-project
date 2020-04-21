const express = require("express");
const router = express.Router();

// Data
const cookies = require("../data");

router.get("/cookies", (req, res) => {
  res.json(cookies);
});

router.get("/cookies/:cookieId", (req, res) => {
  console.log(req.params);
});

module.exports = router;
