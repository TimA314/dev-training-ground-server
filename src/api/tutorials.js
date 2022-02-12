const express = require("express");
const router = express.Router();
const tutorials = require("../Data/tutorials.json");
const slowDown = require("express-slow-down");

const speedLimiter = slowDown({
  windowMs: 60 * 1000,
  delayAfter: 1,
  delayMs: 1000,
});

router.get("/", speedLimiter, (req, res, next) => {
  res.json(tutorials);
});

module.exports = router;
