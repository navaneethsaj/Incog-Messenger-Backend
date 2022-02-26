var express = require('express');
const { getRandomUsers, createUser } = require('../controller/user.controller');
var router = express.Router();

router.get('/randomusers', getRandomUsers);
router.post('/createuser', createUser);
router.post('/image', );

module.exports = router;
