const express = require('express');
const router = express.Router();
const { songController, artistControllerController, genreController, userController , authController } = require('../controllers');



router.post('/auth', authController.createUser);

module.exports = router;