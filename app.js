var express = require('express');
var bodyParser = require('body-parser');

var app = express();


app.use(function (req, res, next) {
  console.log('parse');
  // parse
  var buf = '';
  req.setEncoding('utf8');
  req.on('data', function(chunk){ buf += chunk });
  req.on('end', function(){
    if(buf){
      try{
        var qs = require('querystring');
        var ob = qs.decode(buf);
        req.query = ob;
      }catch (e){
        console.log('taobao body parser fail!');
        console.log(e);
      }
    }
    next();
  });
});

app.all('/aws/notifypaystatus', function (req, res,next) {
  console.log(req.headers);
  console.log(req.query);
  console.log(req.body);
  res.end('index');
});


app.listen(9000, function () {
  console.log('start payment notify ok');
});