//this is entry point of the routs
// express router
// /home
//     / contact 
//     / about
//     / user / profile
//     / user / edit 
//     / user / create 

const express = require('express');

// it used to seprate the route and the controller
const router = express.Router();

console.log('router loaded');

module.exports = router;