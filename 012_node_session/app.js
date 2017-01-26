var express = require('express');
var app = express();

app.use(express.cookieParser());
app.use(express.session({secret: '1234567890QWERTY'}));

app.get('/awesome', function(req, res) {
    if(req.session.lastPage) {
        res.write('Last page was: ' + req.session.lastPage + '. ');
    }
    req.session.lastPage = "/awesome";
    res.write(" You're Awesome.");
    res.end();
});
app.get('/radical', function(req, res) {
     if(req.session.lastPage) {
        res.write('Last page was: ' + req.session.lastPage + '. ');
    }
    req.session.lastPage = "/radical";
    res.write(' What a radical visit!');
    res.end();
});
app.get('/tubular', function(req, res) {
     if(req.session.lastPage) {
        res.write('Last page was: ' + req.session.lastPage + '. ');
    }
    req.session.lastPage = "/tubular";
  res.write(' Are you a surfer?');
  res.end();
});

app.listen(process.env.PORT || 8080);