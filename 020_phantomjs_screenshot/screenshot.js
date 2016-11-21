var webpage = require('webpage').create();

webpage.viewportSize = {
  width: 800,
  height: 800
};

webpage.open('https://scotch.io/', function() {
    webpage.render('scotch.png');
    phantom.exit();
});