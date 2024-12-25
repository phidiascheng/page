var http = require('http');
var date = require('./date.js')
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
//    res.writeHead(200, {'Content-Type': 'text/html','charset':'utf-8'});
//    var q = url.parse(req.url, true).query;
//    var txt = q.year + " " + q.month;
//    res.end(txt);
//    res.end('Hello World hello!' + date.myDateTime());

    fs.readFile('data.json', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html, charset=utf-8'});
        res.write(data);
        res.end();

        fs.appendFile('mynewfile3.txt', data, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
        fs.unlink('mynewfile2.txt', function (err) {
            if (err) throw err;
            console.log('File deleted!');
          });
        return res;
    });


}).listen(8080);