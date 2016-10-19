var express = require('express');
var app = express();
var pug = require('pug');
app.use(express.static(__dirname + '/public'));
app.get('/', function(request, response) {
  console.log('Requesting home page...');
  response.send(pug.renderFile(__dirname + '/views/index.pug', {}));
  // response.sendFile(__dirname + '/index.html');
});
app.get('books/if-you-could-mine', function(request, response) {
  console.log('Requesting contact page....');
  response.send(pug.renderFile(__dirname + '/views/books/if-you-could-mine.pug', {}));
});
app.get('books/the-little-prince', function(request, response) {
  console.log('Requesting contact page....');
  response.send(pug.renderFile(__dirname + '/views/books/the-little-prince.pug', {}));
});
app.get('books/the-girl-on-the-train', function(request, response) {
  console.log('Requesting contact page....');
  response.send(pug.renderFile(__dirname + '/views/books/the-girl-on-the-train.pug', {}));
});


app.listen(3000, function() {
  console.log('Web server started on port 3000');
});
