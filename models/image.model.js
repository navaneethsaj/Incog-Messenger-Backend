const { default: mongoose } = require("mongoose");

var UserImage = new mongoose.model('UserImage' , {
    fileName: String,
    img:
    {
        data: Buffer,
        contentType: String,
    }
});

module.exports = UserImage;