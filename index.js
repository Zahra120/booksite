var express = require('express');
var app = express();
var pug = require('pug');
app.use(express.static(__dirname + '/public'));
app.get('/', function(request, response) {
  console.log('Requesting home page...');
  response.send(pug.renderFile('views/index.pug', {}));
  // response.sendFile(__dirname + '/index.html');
});
app.get('/books/if-you-could-mine', function(request, response) {
  console.log('Requesting books page....');
  response.send(pug.renderFile('views/books/if-you-could-mine.pug', {}));
});
app.get('/books/red', function(request, response) {
  console.log('Requesting books page....');
  response.send(pug.renderFile('views/books/red.pug', {}));
});
app.get('/books/the-girl-on-train', function(request, response) {
  console.log('Requesting books page....');
  response.send(pug.renderFile('views/books/the-girl-on-train.pug', {}));
});


app.listen(3000, function() {
  console.log('Web server started on port 3000');
});
