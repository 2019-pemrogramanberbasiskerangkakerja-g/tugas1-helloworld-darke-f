var express = require('express');
var app = express();
var port = 99;

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(port, function () {   
   console.log(`Example app listening on port ${port}`)
})