const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/scatch');

const userSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password:String,
    isadmin : Boolean,
    picture: String,
    contact: Number,
    order: Array
});

module.exports = mongoose.model('User', userSchema);



