const express = require('express');
const router = express.Router();
const userController = require('../controllers/users_controller');

router.get('/profile', userController.profile);
router.get('/post', userController.post);


router.get('/sign-up', userController.signUp);
router.get('/sign-in', userController.signIn);
router.get('/logout', userController.logout);

// router.get('/create', userController.create);
router.post('/create', userController.create);
router.post("/create-sessions", userController.createSession);
router.post("/create-sessions", userController.createSession);

module.exports = router;