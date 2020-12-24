var express = require('express');
var fs = require('fs');
//var favicon = require('serve-favicon');
var app = express();
var methodOverride = require('method-override');
const apirequest = require('request');


app.use(methodOverride('_method'));
app.use(express.urlencoded());

app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
//app.use(favicon(__dirname + '/public/images/logo.png'));

var port = process.env.PORT || 3000; //||8000
app.listen(port, function(){
  console.log('Easy server listening for requests on localhost:'+ port+'!');
});

app.get('/', function(request, response){
  response.status(200);
  response.locals.title = "Home";
  response.render('index');

});

app.get('/index', function(request, response){
  response.status(200);
  response.locals.title = "Home";
  response.render('index');

});

app.get('/contact', function(request, response){
  response.status(200);
  response.locals.title = "Contact";
  response.render('contact');
});

app.get('/projects', function(request, response){
  response.status(200);
  response.locals.title = "Projects";
  response.render('projects');
});

app.get('/resume', function(request, response){
  response.status(200);
  response.locals.title = "CV";
  response.render('resume');
});

app.get('/writing', function(request, response){
    response.status(200);
    response.locals.title = "Writing";
    response.render('writing');
  });
  
