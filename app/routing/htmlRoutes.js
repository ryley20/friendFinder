var path = require("path");
var express = require("express");
var htmlrouter = express.Router();


htmlrouter.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

htmlrouter.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

htmlrouter.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

//Export HTML routes for server.js to use.
module.exports = htmlrouter;