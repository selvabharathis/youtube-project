const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/login", (req, res) => {
  res.send("you have hit the login page");
});

app.get("/signup", (req, res) => {
  res.send("you have hit the signup page");
});
