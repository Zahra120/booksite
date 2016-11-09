var express = require('express');
var app = express();
var pug = require('pug');

app.use(express.static(__dirname + '/public'));
app.get('/', function(request, response) {
  console.log('Requesting home page...');
  response.send(pug.renderFile('views/book/index.pug', {}));
  // response.sendFile(__dirname + '/index.html');
});
app.get('/book/new.pug', function(request, response) {
  console.log('Requesting home page...');
  response.send(pug.renderFile('views/book/new.pug', {}));
  // response.sendFile(__dirname + '/index.html');
});
app.get('/if-you-could-mine', function(request, response) {
  console.log('Requesting books page....');
  response.send(pug.renderFile('views/show/if-you-could-mine.pug', {}));
});
app.get('/red', function(request, response) {
  console.log('Requesting books page....');
  response.send(pug.renderFile('views/show/red.pug', {}));

});
app.get('/the-girl-on-train', function(request, response) {
  console.log('Requesting books page....');
  response.send(pug.renderFile('views/show/the-girl-on-train.pug', {}));
});


 app.listen(3000, function() {
   console.log('Web server started on port 3000');
 });
