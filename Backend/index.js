const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = 3000;

// connect to mongo db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connected succesfully");
  });

// starting server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
