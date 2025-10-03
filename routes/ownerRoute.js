const express = require('express');
const router = express.Router();
const Owner = require('../models/owner-model');
const ownerModel = require('../models/owner-model');

router.get('/', (req, res) => {
    res.send('Owner Route is working');
});

router.get('/create', async (req, res) => {
    
    let owner = await ownerModel.find()
    if(owner.length>0){
        res.send("Owner already exists").status(400);
    }

    let {name, email, password} = req.body;
    await ownerModel.create({
        name,
        email,
        password
    });
    res.send('Owner created successfully');
    });

module.exports = router;