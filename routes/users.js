var express = require('express');
const { getRandomUsers, createUser, updateUserStatus, updateLastSeen, getUserById, getStatusById, updateUserDetails } = require('../controller/user.controller');
var router = express.Router();

router.post('/randomusers', getRandomUsers);
router.post('/createuser', createUser);
router.post('/updateuserstatus', updateUserStatus);
router.post('/updatelastseen', updateLastSeen);
router.post('/updateuserdetails', updateUserDetails);
router.post('/getuserbyid', getUserById);
router.post('/getstatusbyid', getStatusById);

module.exports = router;
