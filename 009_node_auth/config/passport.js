var LocalStrategy = require('passport-local').Stragety;

var User = require('../app/models/user');

module.exports = function(passport){
    passport.serializeUser(function(user, done){
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done){
        User.findById(id, function(err, user){
            done(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({
        //  by default, localstragety uses username and pass, we will override with email
        usernameField : 'email',
        passwordField: 'password',
        passReqToCallback: true // allows to pass back the entire request to callback
    },
    function(req, email, password, done){// callback with email and password from our form
        //async
        // user.findOne won't fire unless data is sent back
        process.nextTic(function(){
            // find a user whose email is the same as the forms email
            // checking if user trying to login already exists
            User.findOne({'local.email': email}, function(err, user){
                if(err){
                    return done(err);
                }
                //chk if user with that email exists
                if(user){
                    return done(nul, false, req.flash('signupMessage', 'That email already exists'));
                }else{
                    var newUser = new User();
                    //set the user's local credentials
                    newUser.local.email = email;
                    newUser.local.password = newUser.generateHash(password);

                    // save the user
                    newUser.save(function(err){
                        if(err) throw err;

                        return done(null, newUser);
                    });
                }
            });
        });
    }
    ));
}