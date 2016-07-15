var http = require("http"),
// And mysql module you've just installed.
	fs = require("fs");

// Create the http server.
http.createServer(function (request, response) {
	// Attach listener on end event.
	request.on('end', function () {
		// Check if user requests /
		if (request.url == '/') {
			// Read the file.
			fs.readFile('test.txt', 'utf-8', function (error, data) {
				// Write headers.
				response.writeHead(200, {
					'Content-Type': 'text/plain'
				});
				// Increment the number obtained from file.
				data = parseInt(data) + 1;
				// Write incremented number to file.
				fs.writeFile('test.txt', data);
				// End response with some nice message.
				response.end('This page was refreshed ' + data + ' times!');
			});
		} else {
			// Indicate that requested file was not found.
			response.writeHead(404);
			// And end request without sending any data.
			response.end();
		}
	});
// Listen on the 8080 port.
}).listen(8080);
