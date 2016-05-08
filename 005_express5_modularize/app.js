var express = require('express');
var path = require('path');// standard node module, comes with node
var bodyParser = require('body-parser');

var app = express();

	// configure app
	app.set('view engine', 'ejs');
	app.set('views', path.join(__dirname, 'views'));// dirname is current directory
	// use middleware
	app.use(bodyParser());
	app.use(express.static(path.join(__dirname, 'bower_components/')));
	// define routes
	app.use(require('./todos'));
	//app.use('/api', require('api'));// use if you have
	
// start the server
var port = process.env.PORT || 1337;// for cloud
app.listen(port, function(){
	console.log('ready on port 1337');
});