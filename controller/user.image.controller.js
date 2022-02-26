

var fs = require('fs');
const { ObjectId } = require('mongodb');
var path = require('path')
const UserImage = require('../models/image.model');
  
async function uploadImage (req, res, next){
    try {
        var userimage = new UserImage({
            fileName: req.file.originalname,
            img: {
                data: fs.readFileSync(path.join('./' + '/uploads/' + req.file.filename)),
                contentType: req.file.mimetype
            }
        })
        await userimage.save()
        res.status(200).send("success")
    } catch (error) {
        res.status(500).send('error')
    } finally{
        fs.unlink(path.join('./' + '/uploads/' + req.file.filename), (err) => {
            if (err){
                console.log('Err', err)
            }
        })
    }
}

async function downloadImage (req, res, next){
    try {
        let {imageid} = req.query
        let results = await UserImage.findOne({_id: ObjectId(imageid)}).exec()
        var data = results.img.data;
        var img = Buffer.from(data);
        res.writeHead(200, {
            'Content-Type': results.img.contentType,
            'Content-Length': img.length
        });
        res.end(img);
    } catch (error) {
        console.log(error)
        res.status(500).send("error")
    }
}

async function getAllImageIDs (req, res, next){
    try {
        let results = await UserImage.aggregate([
            {$sample: {size: 500}},
            {$project: {_id: 1, fileName: 1}}
        ]).exec()
        res.send({status: 200, results})
    } catch (error) {
        console.log(error)
        res.status(500).send("error")
    }
}

module.exports = {
    uploadImage,
    downloadImage,
    getAllImageIDs
}