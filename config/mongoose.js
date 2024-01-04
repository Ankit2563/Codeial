/** @format */

const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/codeial_development");
// Replace this with your actual connection string
const mongooseConnectionString = 'mongodb://localhost:27017/codeial_development';
// mongoose.connect.mongooseConnectionString

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
