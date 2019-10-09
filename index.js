var express = require('express');
var app = express();
var port = 8000;
var path = require('path')
app.use(express.static('scripts'))
app.get('/', function(req, res) {
    res.sendFile(__dirname+'/index.html');
})
app.get('/data', function(req, res){
    console.log(req);
})

app.listen(port,function(){console.log("Listening at port " + port)})