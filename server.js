///**
// * Created by Joshua on 8/4/2015.
// */
//
//var express = require('express');
//var app = express();
//
//app.use('/client/', express.static(__dirname + '/client'));
//
//app.get('/hello', function(req,res){
//    res.sendFile(__dirname+ '/client/index.html')
//});
//
//var port = Number(process.env.PORT || 3000);
//
//app.listen(port, function() {
//    console.log("Server listening on port " + port)
//});

var http = require('http');

var server = http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello JsTogether</h1>');
});