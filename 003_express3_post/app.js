var express = require('express');
var path = require('path');// standard node module, comes with node
var bodyParser = require('body-parser');

var app = express();

	// configure app
	app.set('view engine', 'ejs');
	app.set('views', path.join(__dirname, 'views'));// dirname is current directory
	// use middleware
	app.use(bodyParser());
	// define routes

var todoItems = [
			{id: 1, desc: 'foo'},
			{id: 2, desc: 'bar'},
			{id: 3, desc: 'baz'}
		];

app.get('/', function(req, res){
	// creates a view called index
	res.render('index', {
		title: 'My App',
		items: todoItems
	});
});

app.post('/add', function(req, res){
	var newItem = req.body.newItem;
	todoItems.push({
		id: todoItems.length + 1,
		desc: newItem
	});
	
	res.redirect('/');
	//console.log(newItem);
})

app.listen(1337, function(){
	console.log('ready on port 1337');
});