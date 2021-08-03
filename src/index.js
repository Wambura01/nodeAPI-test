const express = require("express");
const fs = require("fs");
const path = require("path");
const movies = require("./movies.json");

const app = express(); //initialize express app
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/movie_list", (req, res) => {
  res.send(movies);
});

app.listen(PORT, () => {
  console.log(`The app is listening to http://localhost:${PORT}`);
});
