const { ObjectId } = require("mongodb");
const { default: mongoose } = require("mongoose");

const networkSchema = mongoose.Schema({
    following_id: {type: ObjectId, required: true},
    follower_id: {type: ObjectId, required: true},
})

networkSchema.index({following_id: 1, follower_id: 1}, {unique: true})

const UserNetwork = mongoose.model('UserNetwork' , networkSchema);

UserNetwork.createIndexes()

module.exports = UserNetwork;