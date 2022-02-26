const uri = "mongodb+srv://incognitouser:UGYDtjhOTljSiVyn@cluster0.43al5.mongodb.net/incognitodb?retryWrites=true&w=majority";

const mongoose = require('mongoose');
mongoose.connect(uri).then(()=>{
    console.log('Mongo Connection Success')
});

mongoose.connection.on('error', function (err) {
    console.log('Mongo connection FAILED ', err)
});

module.exports = mongoose;