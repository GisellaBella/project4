var express = require('express');
var app = express();
var kvizoRouter = require('./config/routes.js');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(kvizoRouter);
app.use(express.static('public'));
app.use(function(req, res){
   res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 5000);
// app.listen(3000, function() {
// 	console.log("Listening on localhost:3000");
// });