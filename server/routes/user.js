const express = require("express");
const app = express();
const isLoggedIn = require("../middlewares/isLoggedIn");
const { create, log_in } = require("../controllers/user/auth");
const { info, profile } = require("../controllers/user/user");

app.post("/create", create);
app.post("/logIn", log_in);
app.post("/info", isLoggedIn, info);
app.post("/profile", isLoggedIn, profile);

module.exports = app;
