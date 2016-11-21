var NodePDF = require('nodepdf');
 
// last argument is optional, sets the width and height for the viewport to render the pdf from. (see additional options) 
var pdf = new NodePDF('http://www.google.com', 'google.pdf', {
    'viewportSize': {
        'width': 1440,
        'height': 900
    }, 
    'args': '--debug=true'
});
 
pdf.on('error', function(msg){
    console.log(msg);
});
 
pdf.on('done', function(pathToFile){
    console.log(pathToFile);
});
 
// listen for stdout from phantomjs 
pdf.on('stdout', function(stdout){
     // handle 
});
 
// listen for stderr from phantomjs 
pdf.on('stderr', function(stderr){
    // handle 
});