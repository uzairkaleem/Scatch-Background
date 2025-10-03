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
// const auth = require('./middleware/auth');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'));
});



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


