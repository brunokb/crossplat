var express = require('express')
var appServer = express()
var path = require('path')

appServer.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/clinetUI/index.html'));
});

appServer.get('/index.js', function (req, res) {
  res.sendFile(path.join(__dirname+'/clinetUI/index.js'));
});

appServer.get('/validateUser', function (req, res) {

    var username = req.query.username;
    var password = req.query.password;
    
    res.send({userName : 'Test'});
    if(username == "admin" && password == "admin")
    {
        res.send("Welcome");    
    } else {
        res.send("Not allowed");
    }
});

appServer.listen(3000)
