const express = require("express");
const port = process.env.PORT || 8080;

const quiz = require("./Data/quizQuestions.json");
const tutorials = require("./Data/tutorials.json");

const app = express();

app.get("/ping", (req, res) => {
  res.send("success");
});

app.get("/quiz", (req, res) => {
  res.send(quiz);
});

app.get("/tutorials", (req, res) => {
  res.send(tutorials);
});

app.listen(port, function () {
  console.log("Listening on PORT " + port);
});
