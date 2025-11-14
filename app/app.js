const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  let usuarios = mongoose.model('User').find();
  console.log(usuarios);
  res.json(usuarios);
});

module.exports = { app, mongoose };
