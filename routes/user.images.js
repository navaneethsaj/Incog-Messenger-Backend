var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path')
var multer = require('multer');
const UserImage = require('../models/image.model');
const { uploadImage, downloadImage, getAllImageIDs } = require('../controller/user.image.controller');
  
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
  
var upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), uploadImage);
router.get('/download', downloadImage);
router.get('/getallimageid', getAllImageIDs);

module.exports = router;
