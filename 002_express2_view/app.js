var express = require('express');
var path = require('path');// standard node module, comes with node

var app = express();

	// configure app
	app.set('view engine', 'ejs');
	app.set('views', path.join(__dirname, 'views'));// dirname is current directory
	// use middleware
	// define routes
	
app.get('/', function(req, res){
	//res.send('hello, express!');//sends html
	
	res.render('index');// creates a view called index
});

app.listen(1337, function(){
	console.log('ready on port 1337');
});