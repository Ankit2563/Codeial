const express = require('express');
const router = express.Router();
const userController = require('../controllers/users_controller');
const passport = require('passport');

router.get('/profile', userController.profile);
router.get('/post', userController.post);

router.get('/sign-up', userController.signUp);
router.get('/sign-in', userController.signIn);

// router.get('/create', userController.create);
router.post('/create', userController.create);

// use passport as a middleware to authenticate
router.post('/create-sessions', passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'},

), userController.createSession);
module.exports = router;