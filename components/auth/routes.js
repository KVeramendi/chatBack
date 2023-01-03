const express = require('express');
const router = express.Router();
const controller = require('./controller');
router.post('/login',controller.login);
router.post('/signin',controller.signin);
module.exports = router;