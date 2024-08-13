const express = require("express");
const app = express();
const isLoggedIn = require("../middlewares/isLoggedIn");
const { create, Courses, video } = require("../controllers/courses/course");

app.post("/getCourses", isLoggedIn, Courses);
app.post("/getVideo", isLoggedIn, video);
app.post("/create", isLoggedIn, create);

module.exports = app;
