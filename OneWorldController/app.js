var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');

// auth:extra dependencies for authentication
var exphbs = require('express-handlebars'),
    methodOverride = require('method-override'),
    session     = require('express-session')
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    TwitterStrategy = require('passport-twitter'),
    GoogleStrategy = require('passport-google'),
    FacebookStrategy = require('passport-facebook');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

var config = require('./config.js'),//config file contains all tokens and other private info
    funct = require('./functions.js');//funct file contains our helper functions for our Passport and database work

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
// Configure express to use handlebars templates
var hbs = exphbs.create({
    defaultLayout: 'main', //we will be creating this layout shortly
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//auth:================passport=====================
// Passport session setup.
passport.serializeUser(function(user, done){
  console.log("serializing " + user.username);
  done(null, user);
});
passport.deserializeUser(function(obj, done){
  console.log("deserializing " + obj);
  done(null, obj);
});

app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(cookieParser());
app.use(session({secret:'supernova', saveUninitialized: true, resave: true}));
app.use(passport.initialize());
app.use(passport.session());
//Session-persisted message middleware
app.use(function(req, res, next){
  var err = req.session.error,
      msg = req.session.notice,
      success = req.session.success;

  delete req.session.error;
  delete req.session.success;
  delete req.session.notice;

  if(err) res.locals.error = err;
  if(msg) res.locals.notice = msg;
  if(success) res.locals.success = success;

  next();
});

// add the strategies
var users = [{"id":111, "username":"rajan", "password":"rajan"}];

passport.use('local-signin', new LocalStrategy(
  {passReqToCallback : true}, //allows us to pass back the request to the callback
  function(req, username, password, done) {
    if(username === users[0].username && password === users[0].password){
      console.log("LOGGED IN AS: " + users[0].username);
      req.session.success = 'You are successfully logged in ' + users[0].username + '!';
      return done(null, users[0]);
    }else{
      console.log("COULD NOT LOG IN");
      req.session.error = 'Could not log user in. Please try again.'; 
      return done(null, false, {"message": "user not found."});
    }
  }
));
// Use the LocalStrategy within Passport to register/"signup" users.
passport.use('local-signup', new LocalStrategy(
  {passReqToCallback : true}, //allows us to pass back the request to the callback
  function(req, username, password, done) {
    funct.localReg(username, password)
    .then(function (user) {
      if (user) {
        console.log("REGISTERED: " + user.username);
        req.session.success = 'You are successfully registered and logged in ' + user.username + '!';
        done(null, user);
      }
      if (!user) {
        console.log("COULD NOT REGISTER");
        req.session.error = 'That username is already in use, please try a different one.'; //inform user could not log them in
        done(null, user);
      }
    })
    .fail(function (err){
      console.log(err.body);
    });
  }
));

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
