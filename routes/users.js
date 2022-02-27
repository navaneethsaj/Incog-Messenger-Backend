var express = require('express');
const { getRandomUsers, createUser, updateUserStatus, updateLastSeen, getUserById, getStatusById } = require('../controller/user.controller');
var router = express.Router();

router.get('/randomusers', getRandomUsers);
router.post('/createuser', createUser);
router.post('/updateuserstatus', updateUserStatus);
router.post('/updatelastseen', updateLastSeen);
router.post('/getuserbyid', getUserById);
router.post('/getstatusbyid', getStatusById);

module.exports = router;
