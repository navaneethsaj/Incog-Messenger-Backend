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

module.exports = {
    getRandomUsers,
    createUser
}