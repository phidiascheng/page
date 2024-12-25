const express = require('xpress');

const serverless = require('serverless-http');

const app = express();

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        'hello':'hi'
    })
});

app.use('/.netlify/functions/apis',router): 

module.exports.handler = serverless(app);


