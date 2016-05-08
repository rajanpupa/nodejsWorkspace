var express = require('express');

var app = express();

// block the header, containing info about our server
app.disable('x-powerd-by')