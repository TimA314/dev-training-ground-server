const express = require("express");
const port = process.env.PORT || 8080;

const quiz = require("./Data/quizQuestions.json");
const tutorials = require("./Data/tutorials.json");

const app = express();

// ------ to allow cross origin calls in dev
if (process.env.NODE_ENV !== "production") {
  const originPort = process.env.originPORT || 3000; // Front End (React) local port number
  app.use(function (req, res, next) {
    res.setHeader(
      "Access-Control-Allow-Origin",
      `http://localhost:${originPort}`
    );

    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );

    res.setHeader("Access-Control-Allow-Credentials", true);

    next();
  });
  // -------

  app.get("/ping", (req, res) => {
    res.send("success");
  });

  app.get("/quiz", (req, res) => {
    res.send(quiz);
  });

  app.get("/tutorials", (req, res) => {
    res.send(tutorials);
  });
}

app.listen(PORT, function () {
  console.log("Listening on PORT " + port);
});
