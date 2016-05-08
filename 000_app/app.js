/**
	Very basic program that creates a server and binds to a port.
	A function object is passed in the createServer method, which basically gets called and returns a response.
	
	This is for demo purpose and we don't write large apps this way , because
	Here, one function has to know about all the routes and all the functionality.
	
	We can use express instead to handle those for us.
*/

var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

console.log('Node Server running at http://127.0.0.1:1337/');