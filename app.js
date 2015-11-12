var express = require('express');
var bodyParser = require('body-parser');

var app = express();


app.all('/aws/notifypaystatus', function (req, res,next) {
  console.log(req.headers);
  console.log(req.query);
  console.log(req.body);
  res.end('index');
});
app.listen(9000, function () {
  console.log('start payment notify ok');
});