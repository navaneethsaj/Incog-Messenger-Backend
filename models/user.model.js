const { ObjectId } = require("mongodb");
const { default: mongoose } = require("mongoose");

const User = mongoose.model('User', {
    name: {type: String, required: true, unique: true},
    tagline: {type: String, required: true},
    gender: {type: String, required: true},
    profile_pic: {type: ObjectId, required: true}
})

module.exports = User