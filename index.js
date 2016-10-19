var express = require('express');
var app = express();
var pug = require('pug');
app.use(express.static(__dirname + '/public'));
app.get('/', function(request, response) {
  console.log('Requesting home page...');
  response.send(pug.renderFile(__dirname + '/views/index.pug', {}));
  // response.sendFile(__dirname + '/index.html');
});
app.listen(3000, function() {
  console.log('Web server started on port 3000');
});
