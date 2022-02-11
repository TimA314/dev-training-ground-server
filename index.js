const express = require("express");
const app = express();
const PORT = 3000;

const quiz = require("./Data/quizeQuestions.json");

app.listen(PORT, function () {
  console.log("Listening on PORT " + PORT);
});

app.get("/ping", (req, res) => {
  res.send("success");
});

app.get("/quiz", (req, res) => {
  res.send(quiz);
});
