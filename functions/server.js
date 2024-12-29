const express = require('express');
const serverless = require('serverless-http');
const router = require("./apix");
const app = express();

app.set("view engine", "ejs");
app.use('/',router);

module.exports.handler = serverless(app);