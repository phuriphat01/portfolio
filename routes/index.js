const express = require('express');
const router = express.Router();
const myData = require('../data');

router.get('/',(req,res)=>{
    //res.send("<h1>My Portfolio</h1>");
    res.render('index',{myData});
});

router.get('/aboutme',(req,res)=>{
    res.render('about',{myData});
});

router.get('/education',(req,res)=>{
    res.render('education',{myData});
});

router.get('/workepxperience',(req,res)=>{
    res.render('workepxperience',{myData});
});

router.get('/skill',(req,res)=>{
    res.render('skill',{myData});
});

module.exports = router;


