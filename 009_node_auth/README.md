
# Nodejs MySql database

* First create your package.json file
* `npm install`
* Now write the code in app.js

* middlewares are not built into express as of node 4.*

* this command installs mysql dependencies, as well as adds it in package.json file
```npm install --save mysql```

* select, create, update, delete are there in the code.

* To create a stored procedure
```
DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_getall`()
BEGIN
    SELECT id, name, location FROM employees;
END
```

* To call a sp.
```
con.query('CALL sp_getall()',function(err,rows){
  if (err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows);
});
```

# References

### Mysql db
https://www.sitepoint.com/using-node-mysql-javascript-client/

### General
https://youtu.be/MMOIr_VwwAk
http://stackoverflow.com/questions/25550819/error-most-middleware-like-bodyparser-is-no-longer-bundled-with-express