const express = require('express');
const router = express.Router();
const controller = require('./controller');
const validateToken = require('../../middleware/auth');
router.get('/',validateToken,controller.getMyRooms);
module.exports = router;