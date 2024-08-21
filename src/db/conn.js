const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(function () {
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => {
    console.log("Could not connect to MongoDB" + err);
  });
