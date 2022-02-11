const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, function () {
  console.log("Listening on PORT " + PORT);
});

app.get("/ping", (req, res) => {
  res.send("success");
});
