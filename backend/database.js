"use strict";
const mongoose = require("mongoose");
const DB_ONLINE =
  "mongodb+srv://growthman:ilovemusic1234@cluster0.g51is.mongodb.net/growthman?retryWrites=true&w=majority";

const DB_LOCAL = "mongodb://localhost/CodeLab24";

module.exports = () => {
  mongoose
    .connect(DB_ONLINE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    })
    .then(() => console.log("Connected to Mongodb......"));
};

// 'mongodb://localhost/upload-files-database'
