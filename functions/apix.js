const express = require('express');
const json = require('../data/data.json')
const router = express.Router();
const path = require('path');
module.exports = router;

var postPerPage = 10;
var pageEnd = Math.ceil(json.blogs.length/postPerPage);


router.get('/blog', (req, res) => {
    var p = parseInt(req.query.p);
    var passageID = p;
    var plist = Math.floor(passageID/postPerPage);
    setting = {
        json:json,
        passageID:passageID,
        plist:plist,
    }
    res.render('loadPassage',setting);
});

router.get('/bloglist', (req, res) => {
    var p = parseInt(req.query.p);
    var passageStart = p*10;
    var passageEnd = (p+1)*10;
    if (passageEnd > json.blogs.length){
        passageEnd = json.blogs.length;
    }
    setting = {
        json:json,
        passageStart:passageStart,
        passageEnd:passageEnd,
        pageEnd:pageEnd,
        postPerPage:postPerPage
    }
    res.render('loadList',setting);
});



router.get('/', (req, res) => {
    var passageStart = 0;
    var passageEnd = postPerPage;
    if (json.blogs.length < postPerPage){
        passageEnd = json.blogs.length;
    }
    var page = 0;
    setting = {
        json:json,
        passageStart:passageStart,
        passageEnd:passageEnd,
        pageEnd:pageEnd,
        postPerPage:postPerPage
    }
    res.render('loadList',setting);
});

router.get('/about', (req, res) => {
    res.render('loadAbout');
});

router.get('/bishun', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/htmls','/bishun.html',));
});

router.get('/p', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/htmls','/p.html',));
});
