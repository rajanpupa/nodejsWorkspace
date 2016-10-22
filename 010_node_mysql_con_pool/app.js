 var express    = require("express");
 var mysql      = require('mysql');
 var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : '',
   database : 'sitepoint'
 });
 var app = express();
 
 connection.connect(function(err){
 if(!err) {
     console.log("Database is connected ... \n\n");  
 } else {
     console.log("Error connecting database ... \n\n");  
 }
 });
 
 app.get("/",function(req,res){
    connection.query('SELECT * from employees LIMIT 2', function(err, rows, fields) {
    //connection.end();
        if (!err){
            console.log('The solution is: ', rows.length);
            res.json({ message: rows });
        }else{
            console.log('Error while performing Query.');
        }
    });
 });
 
 app.listen(3000);