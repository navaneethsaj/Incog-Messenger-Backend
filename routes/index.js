var express = require('express');
var router = express.Router();

var userRouter = require('./users')
var userImagesRouter = require('./user.images')

var startDate = new Date()

router.get('/', function(req, res, next) {
  res.send(`server is up and running since ${startDate} ...`);
});

router.use('/users', userRouter)
router.use('/userimages', userImagesRouter)

module.exports = router;
