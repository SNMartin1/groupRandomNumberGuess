var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = 5000;
app.use(bodyParser.urlencoded({extended: true}));
var random = require('./random_module/random.js');



var min = 1;
var max;

app.post('/randomNumber', function(req, res) {
  max = req.body.max;
  console.log(max);
  var answer = random(min, parseInt(max));
  var response = answer.toString();
   console.log(answer);
   console.log(response);
  res.send(response); //not sure where parse Int goes
});

// app.get('/random', function(req, res) {
//   res.send(random(min, max));
// });

app.get('/*', function(req,res){
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname,'/public/', file));
});

app.listen(port, function(){
  console.log('Server runing on port', port);
});
