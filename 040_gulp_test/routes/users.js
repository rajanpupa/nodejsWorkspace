var express = require('express');
var router = express.Router();

var json = {name:'Rajan', age:27};
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(json);
});

module.exports = router;
