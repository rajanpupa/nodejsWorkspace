var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');
var configAuth = require('./auth');

// Serialize and Deserialize methods passport
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

// Local Strategy for authentication
passport.use('local-login',new LocalStrategy(
  function(username, password, done) {
      console.log("inside local stragety()");
      User.getUserByUsername(username, function(err, user){
        if(err) throw err;
        if(!user){
            console.log("unknown user");
            return done(null, false, {message: 'Unknown User'});
        }

        User.comparePassword(password, user.password, function(err, isMatch){
            if(err) throw err;
            if(isMatch){
                return done(null, user);
            } else {
                return done(null, false, {message: 'Invalid password'});
            }
        });
      });
  }));


module.exports = passport;