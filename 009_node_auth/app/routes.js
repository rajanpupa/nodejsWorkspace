module.exports = function(app, passport){
    // Homepage with login links
    app.get('/', function(req, res){
        res.render('index.ejs');//load the index.ejs file
    });

    //login
    app.get('/login', function(req, res){
        res.render('login.ejs',{message: req.flash('loginMessage')});
    });

    //signup
    app.get('/signup', function(req, res){
        res.render('signup.ejs',{message: req.flash('signupMessage')});
    });
    app.post('/signup', passport.authenticate('local-signup',{
        successRedirect: '/profile',    // to secure profile section
        failureRedirect: '/signup',
        failureFlash: true              // allow flash message
    }));

    //profile
    app.get('/profile', isLoggedIn, function(req, res){
        res.render('profile.ejs',{
            user: req.user // get the user out of session and pass to template
        });
    });

    // logout
    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }

    res.redirect('/');
}