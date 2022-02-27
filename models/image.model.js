const { default: mongoose } = require("mongoose");

var UserImage = mongoose.model('UserImage' , {
    fileName: String,
    img:
    {
        data: Buffer,
        contentType: String,
    }
});

module.exports = UserImage;