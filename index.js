/** @format */

const express = require("express");
const app = express();
const port = 8000;

//use express router
app.use('/', require('./routes'));

try {
  app.listen(port, function () {
    console.log("Server is running on port:", port);
  });
} catch (err) {
  console.error("Error in running the server:", err);
}
