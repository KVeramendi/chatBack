const express = require('express');
const router = express.Router();
const controller = require('./controller');
router.post('/login',controller.login);
router.post('/signup',controller.signup);
router.get('/find/:name',controller.findUserByName);
module.exports = router;