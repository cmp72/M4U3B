var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');//Este es el index.js o HOME
var usersRouter = require('./routes/users');
var galeriaRouter =require ('./routes/galeria');//va a galeria.js
var pruebaRouter =require ('./routes/prueba');//va a prueba.js
var contactoRouter =require ('./routes/contacto');//va a contacto.js
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/galeria', galeriaRouter);
app.use('/prueba', pruebaRouter);
app.use('/contacto', contactoRouter);
app.get ('/prueba', function(req, res){// esto lo pongo para q  cuando vaya a la pagina de prueba me tire este texto
  res.send("Hola soy la página de prueba")
});
app.get ('/galeria', function(req, res){// esto lo pongo para q  cuando vaya a la pagina de galería me tire este texto
  res.send("Hola soy la página de galeria")
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
