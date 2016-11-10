var express = require('express');
var app = express();
var pug = require('pug');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('zahra120', 'zahra120', '' , {dialect: 'postgres'});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

// Our model definition:
var Book = sequelize.define('book', {
  title: Sequelize.STRING,
  imageURL: Sequelize.STRING,
  author: Sequelize.STRING,
  description: Sequelize.TEXT
});

app.get('/', function(request, response) {
    Book.findAll().then(function(books){
      response.send(pug.renderFile('views/book/index0.pug', {books: books}));

   });


});
app.get('/book/new', function(request, response) {
  console.log('Requesting home page...');
  response.send(pug.renderFile('views/book/new.pug', {}));
});
app.post('/book', function(request, response){
   console.log(request.body);
   Book.create(request.body).then(function(){
      response.redirect('/');
   });

});

sequelize.sync().then(function(){
   console.log('we are conected to database');
   app.listen(3000, function() {
     console.log('Web server started on port 3000');
   });
});
