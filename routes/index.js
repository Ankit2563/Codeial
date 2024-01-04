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


router.get('/', homeController.home)
router.use('/users', require('./users'));
// for any further routers access from here
// router.use('/routerName', require('./routerfile'));

module.exports = router;