const express = require('express');
const router = express.Router();
const auth = require('../components/auth/routes');
const room = require('../components/room/routes');
router.use('/auth',auth);
router.use('/room',room);
module.exports = router;