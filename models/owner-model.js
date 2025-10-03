const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        minlenght: 3,
        required: true,
        trim: true
    },
    email: String,
    password: String,
    products:{
        type: Array,
        default: []
    },
    picture: String,
    gstin: String,
});

module.exports = mongoose.model('Owner', ownerSchema);
