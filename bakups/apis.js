const express = require('express');
const serverless = require('serverless-http');
const json = require('../data/data.json')

const app = express();
app.set("view engine", "ejs");
const router = express.Router();


router.get('/about', (req, res) => {
    res.json({
        'hello':'about'
    })
});

router.get('/index', (req, res) => {
    var test = "dsds";
    res.json({"hello":`${test}`});
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

var head = `<head><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" type="text/css" href="../style.css"></head>`;

var header = `<div class="header"><h2>Cheng's Blog</h2></div>`;

var body = `<body>`+header+`</body>`;

var html = `<!DOCTYPE html><html>`+head+body+`</html>`;

router.get('/test', (req, res) => {
    res.send(html);
});

router.get('/testx', (req, res) => {
    res.render("test",{name:"cheng"});
});



//app.use('/api/',router);
app.use('/',router);
module.exports.handler = serverless(app);


router.get('/', (req, res) => {
    res.render('test',{name:"cheng"});
});