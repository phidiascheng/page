const express = require('express');
const serverless = require('serverless-http');
const json = require('../data.json')

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        'hello':'hi'
    });
});
router.get('/about', (req, res) => {
    res.json({
        'hello':'about'
    })
});
router.get('/test', (req, res) => {
    res.send(json.blogs[0].title);
});

router.get('/index', (req, res) => {

});

router.get('/blogs', (req, res) => {
    var start = req.query.s;
    var end = req.query.e;
    if (end >=json.blogs.length){
        end = json.blogs.length;
    }
    resJason =  {"总长":json.blogs.length,"当前位置":parseInt(start),"单页长度":10,"blogs": []};
    for (let i = start; i<end; i++){
        resJason.blogs.push(json.blogs[i]);
    }
    res.json(resJason);
});

router.get('/bloglist', (req, res) => {
    var p = req.query.p;
    var start = p*10;
    var end = (p+1)*10;
    if (end >=json.blogs.length){
        end = json.blogs.length;
    }
    resJason =  {"总长":json.blogs.length,"当前位置":parseInt(start),"单页长度":10,"blogs": []};
    for (let i = start; i<end; i++){
        resJason.blogs.push(json.blogs[i]);
    }
    res.json(resJason);
});

var head = `
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="style.css">
</head>`;

var header = `
    <div class="header">
        <h2>Cheng's Blog</h2>
    </div>`;



app.use('/api/',router);
module.exports.handler = serverless(app);


