var path = require('path');
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/views'))

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/views/login.html'));
});

app.get('/reg',function(req,res){
    res.sendFile(path.join(__dirname+'/views/reg.html'));
});
app.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/views/about.html'));
});
app.get('/contact',function(req,res){
    res.sendFile(path.join(__dirname+'/views/contact.html'));
});
app.get('/link',function(req,res){
    res.sendFile(path.join(__dirname+'/views/link.html'));
});
console.log("server running!!")
app.listen(8080);

