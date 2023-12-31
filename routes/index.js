//this is entry point of the routs
// express router
// /home
//     / contact 
//     / about
//     / user / profile
//     / user / edit 
//     / user / create 

const express = require('express');
const homeController=require('../controllers/home_controller')

// it used to seprate the route and the controller
const router = express.Router();

console.log('router loaded');
router.get('/',homeController.home)

module.exports = router;