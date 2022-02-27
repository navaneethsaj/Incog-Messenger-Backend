const { ObjectId } = require('mongodb');
const UserNetwork = require('../models/networks.model');

async function followUser(req, res){
    try {
        let {following_id, follower_id} = req.body;
        let connection = new UserNetwork({
            following_id: ObjectId(following_id),
            follower_id: ObjectId(follower_id)
        })
        await connection.save()
        res.send({status: 200})
    } catch (error) {
        if(error.code === 11000){
            res.send({status: 200})
        }
        else{
            res.status(500).send("something went wrong")
        }
    }
}

async function unFollowUser(req, res){
    try {
        let {following_id, follower_id} = req.body;
        await UserNetwork.findOneAndDelete({following_id, follower_id}).exec()
        res.send({status: 200})
    } catch (error) {
        if(error.code === 11000){
            res.send({status: 200})
        }
        else{
            res.status(500).send("something went wrong")
        }
    }
}

module.exports = {
    followUser,
    unFollowUser
}