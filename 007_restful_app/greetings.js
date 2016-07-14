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

var greetings = [
			{id: 1, desc: 'Hello World'},
			{id: 2, desc: 'Hello Mundo!'},
		];

var generatedId = 4;

app.get('/api/greetings', function(req, res){
	res.send(greetings);
});
app.get('/api/greetings/:id', function(req, res){
	var id = req.params.id;
	var existingItem ;
	for (var i = 0, len = greetings.length; i < len; i++) {
		if(greetings[i].id === id){
			existingItem = greetings[i];
			break;
		}
    }
	res.send(existingItem);
});
//create
app.post('/api/greetings', function(req, res){
	var newItem = req.body;
    console.log(newItem);
    
	greetings.push({
		id: generatedId++,
		desc: newItem.desc
	});
	console.log(newItem.toString());
	res.send(newItem);
});
// update
app.put('/api/greetings/:id', function(req, res){
    var id = req.params.id;
	var item = req.body;
    console.log('id=' + id + ', item = ' + item);
    // filter an item from javascript array
    var lookup = {};
    for (var i = 0, len = greetings.length; i < len; i++) {
        lookup[greetings[i].id] = greetings[i];
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
app.delete('/api/greetings/:id', function(req, res){
    var id = req.params.id;
    // filter an item from javascript array
    var lookup = {};
    for (var i = 0, len = greetings.length; i < len; i++) {
        lookup[greetings[i].id] = greetings[i];
    }
    //console.log(lookup.toString());
    
	var existingItem = lookup[id];
    
    // greetings.splice(existingItem.id, 1);// not working
    // delete greetings[existingItem.id];// not working
    
    greetings = greetings.filter(function(obj){
        return existingItem.id !== obj.id;
    });
    
	console.log(existingItem);
	res.status(204).send({});
});


app.listen(1337, function(){
	console.log('ready on port 1337');
});
