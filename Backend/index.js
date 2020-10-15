// importing libraries
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")

// importing route files
const auth = require("./routes/auth")

//port for express server
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

//middlewares - predefined
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//middleware for routes (Router)
app.use("/pots",auth)

// starting express server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
