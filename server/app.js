const express = require("express");
const app = express();
const userRoute = require("./routes/user");
const coursesRoute = require("./routes/course");
const cors = require("cors");
require("dotenv").config();

app.use(
  cors({
    origin: process.env.ORIGIN_URI,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoute);
app.use("/courses", coursesRoute);

module.exports = app;
