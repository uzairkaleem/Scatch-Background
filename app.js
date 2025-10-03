const express = require('express');
const app = express();
const cookies = require('cookie-parser');
app.use(cookies());
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
const User = require('./models/user-model');
const Product = require('./models/product-model');
const Owner = require('./models/owner-model');
const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');
const ownerRoute = require('./routes/ownerRoute');
const mongooseConnection = require('./config/mongoose-connection');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', userRoute);
app.use('/api', productRoute);
app.use('/api', ownerRoute);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'));
});



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


