const express = require("express");

const tutorials = require("./tutorials");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/tutorials", tutorials);

module.exports = router;
