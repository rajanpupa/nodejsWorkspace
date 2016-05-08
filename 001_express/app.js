var express = require('express');

var app = express();

	// configure app
	// use middleware
	// define routes
	
app.get('/', function(req, res){
	res.send('hello, express!');//sends html
	
	//res.render('index');// creates a view called index
});

app.listen(1337, function(){
	console.log('ready on port 1337');
});