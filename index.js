const express = require("express");
const port = process.env.PORT || 8080;

const quiz = require("./Data/quizQuestions.json");
const tutorials = require("./Data/tutorials.json");

const app = express();
const router = express.Router();

app.listen(port, function () {
  console.log("Listening on PORT " + port);
});

router.get("/ping", (req, res) => {
  res.send("success");
});

router.get("/quiz", (req, res) => {
  res.send(quiz);
});

router.get("/tutorials", (req, res) => {
  res.send(tutorials);
});
