// Include http module, 
var http = require("http"), 
// And url module, which is very helpful in parsing request parameters. 
	url = require("url"); 

// Create the server. 
http.createServer(function (request, response) { 
	// Attach listener on end event. 
	request.on('end', function () { 
		// Parse the request for arguments and store them in _get variable. 
		// This function parses the url from request and returns object representation. 
		var _get = url.parse(request.url, true).query; 
		// Write headers to the response. 
		response.writeHead(200, { 
			'Content-Type': 'text/plain' 
		}); 
		// Send data and end response. 
		response.end('Here is your data: ' + _get['data']); 
	}); 
// Listen on the 8080 port. 
}).listen(8080);
