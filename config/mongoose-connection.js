const mongoose = require('mongoose');
const config = require('config');
const MONGODB_URI = config.get('MONGODB_URI');
const debug = require('debug')('development:mongoose');


mongoose.connect(`${MONGODB_URI}/scatch`)
.then(() => debug('Connected to MongoDB'))
.catch(err => debug('Could not connect to MongoDB...', err));   

module.exports = mongoose.connection;