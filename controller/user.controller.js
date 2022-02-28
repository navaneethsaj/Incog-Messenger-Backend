const { ObjectId } = require('mongodb');
const User = require('../models/user.model');

async function getRandomUsers(req, res){
    try {
        let users = await User.aggregate([
            {$sample: {size: 30}}
        ]).exec()
        res.send({status: 200, users})
    } catch (error) {
        res.status(500).send("something went wrong")
    }
}

async function createUser(req, res){
    try {
        let {name, tagline, gender, profile_pic} = req.body
        let user = new User({
           name, tagline, gender, profile_pic
        })
        await user.save()
        res.status(200).send({status: 200, user})
    } catch (error) {
        if (error.code === 11000){
            res.send({status: 201, message: 'duplicate user'})
        }else{
            console.log(error)
            res.status(500).send("something went wrong")
        }
    }
}

async function updateUserStatus(req, res){
    try {
        let {_id, status} = req.body
        await User.findByIdAndUpdate(ObjectId(_id), {status, lastSeen: new Date()}).exec();
        res.status(200).send({status: 200})
    } catch (error) {
        if (error.code === 11000){
            res.send({status: 201, message: 'duplicate user'})
        }else{
            console.log(error)
            res.status(500).send("something went wrong")
        }
    }
}

async function updateLastSeen(req, res){
    try {
        let {_id} = req.body
        await User.findByIdAndUpdate(ObjectId(_id), {lastSeen: new Date()}).exec();
        res.status(200).send({status: 200})
    } catch (error) {
        if (error.code === 11000){
            res.send({status: 201, message: 'duplicate user'})
        }else{
            console.log(error)
            res.status(500).send("something went wrong")
        }
    }
}

async function updateUserDetails(req, res){
    try {
        let {_id, name, tagline, gender, profile_pic} = req.body
        await User.findByIdAndUpdate(ObjectId(_id), {name, tagline, gender, profile_pic}).exec();
        res.status(200).send({status: 200})
    } catch (error) {
        if (error.code === 11000){
            res.send({status: 201, message: 'duplicate user'})
        }else{
            console.log(error)
            res.status(500).send("something went wrong")
        }
    }
}

async function getUserById(req, res){
    try {
        let {_id} = req.body
        let users = await User.findById(ObjectId(_id)).exec()
        res.send({status: 200, users})
    } catch (error) {
        console.log(error)
        res.status(500).send("something went wrong")
    }
}

async function getStatusById(req, res){
    try {
        let {_id} = req.body
        let users = await User.findById(ObjectId(_id)).select({status: 1, lastSeen: 1}).exec()
        res.send({status: 200, users})
    } catch (error) {
        console.log(error)
        res.status(500).send("something went wrong")
    }
}

module.exports = {
    getRandomUsers,
    updateUserStatus,
    createUser,
    getUserById,
    updateLastSeen,
    getStatusById,
    updateUserDetails
}