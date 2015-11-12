var express = require('express');

var app = express();


app.all('/alipay/notify', function (req, res,next) {
  console.log(req.headers);
});
app.listen(9000, function () {
  console.log('start payment notify ok');
});