var mysql = require("mysql");

// First create a connection to db
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sitepoint"
});

con.connect(function(err){
    if(err){
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});

// should be before the con.end
con.query('SELECT * FROM employees',function(err,rows){
  if(err) {
      throw err;
  }
    console.log('Data received from Db:\n');
    console.log(rows);
    // names
    for (var i = 0; i < rows.length; i++) {
        console.log(rows[i].name);
    };
});

// creating
var employee = { name: 'Winnie', location: 'Australia' };
con.query('INSERT INTO employees SET ?', employee, function(err,res){
  if(err) throw err;

  console.log('Last insert ID:', res.insertId);
});

// updating
con.query(
  'UPDATE employees SET location = ? Where ID = ?',
  ["South Africa", 5],
  function (err, result) {
    if (err) throw err;

    console.log('Changed ' + result.changedRows + ' rows');
  }
);

// deleting
con.query(
  'DELETE FROM employees WHERE id = ?',
  [5],
  function (err, result) {
    if (err) throw err;

    console.log('Deleted ' + result.affectedRows + ' rows');
  }
);

con.end(function(err){
    // connection terminated gracefully
    console.log('connection terminated$')
});