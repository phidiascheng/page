const express = require('express');

const serverless = require('serverless-http');

const app = express();

const router = express.Router();

var fs = require('fs');

router.get('/', (req, res) => {
    fs.appendFile('mynewfile3.txt', "dsd", function (err) {
        if (err) throw err;
    });
    res.json({
        'hello':'hi'
    });
});
router.get('/about', (req, res) => {
    res.json({
        'hello':'about'
    })
});


app.use('/.netlify/functions/apis',router);

module.exports.handler = serverless(app);


