var express = require('express');

var router = express.Router();

// fake database
var todoItems = [
    {id: 1, desc: 'foo'},
    {id: 2, desc: 'bar'},
    {id: 3, desc: 'baz'}
];

router.get('/', function(req, res){
	// creates a view called index
	res.render('index', {
		title: 'My App',
		items: todoItems
	});
});

router.post('/add', function(req, res){
	var newItem = req.body.newItem;
	todoItems.push({
		id: todoItems.length + 1,
		desc: newItem
	});
	
	res.redirect('/');
	//console.log(newItem);
})

module.exports = router;