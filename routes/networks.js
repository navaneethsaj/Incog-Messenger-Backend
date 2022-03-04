var express = require('express');
const { followUser, unFollowUser } = require('../controller/networks.controller');
var router = express.Router();

router.post('/follow', followUser);
router.post('/unfollow', unFollowUser);

module.exports = router;
