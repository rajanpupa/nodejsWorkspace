var express = require('express');
var path = require('path');// standard node module, comes with node
var bodyParser = require('body-parser');

var app = express();

	// configure app
	//app.set('view engine', 'ejs');
	//app.set('views', path.join(__dirname, 'views'));// dirname is current directory
	// use middleware
	app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
	// define routes

var todoItems = [
			{id: 1, desc: 'foo'},
			{id: 2, desc: 'bar'},
			{id: 3, desc: 'baz'}
		];

var generatedId = 4;

app.get('/api/todos', function(req, res){
	// creates a view called index
	res.send(todoItems);
});
//create
app.post('/api/todos', function(req, res){
	var newItem = req.body;
    console.log(newItem);
    
	todoItems.push({
		id: generatedId++,
		desc: newItem.desc
	});
	console.log(newItem.toString());
	res.send(newItem);
});
// update
app.put('/api/todos/:id', function(req, res){
    var id = req.params.id;
	var item = req.body;
    console.log('id=' + id + ', item = ' + item);
    // filter an item from javascript array
    var lookup = {};
    for (var i = 0, len = todoItems.length; i < len; i++) {
        lookup[todoItems[i].id] = todoItems[i];
    }
	var existingItem = lookup[id];
    if(existingItem === undefined){
        res.send('The item is not found.');
        return;
    }
    existingItem.desc=item.desc;
	console.log(item);
	res.send(item);
});
app.delete('/api/todos/:id', function(req, res){
    var id = req.params.id;
	// var item = req.body.newItem;
    // filter an item from javascript array
    var lookup = {};
    for (var i = 0, len = todoItems.length; i < len; i++) {
        lookup[todoItems[i].id] = todoItems[i];
    }
    console.log(lookup.toString());
    
	var existingItem = lookup[id];
    
    //todoItems.splice(existingItem.id, 1);// not working
    // delete todoItems[existingItem.id];// not working
    
    todoItems = todoItems.filter(function(obj){
        return existingItem.id !== obj.id;
    });
    
	console.log(existingItem);
	res.status(204).send({});
});


app.listen(1337, function(){
	console.log('ready on port 1337');
});