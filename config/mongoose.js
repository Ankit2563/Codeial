/** @format */

// require th library
const mongoose = require("mongoose");
// connect to database
mongoose.connect("mongodb://127.0.0.1:27017/codeial_development");
// acquire the connection to check if it is successfull
const db = mongoose.connection;

//error
db.on("error", console.error.bind(console, "error connecting to db"));

// up and running the print the message
db.once("open", function () {
  console.log("successfully connected to the database");
});
