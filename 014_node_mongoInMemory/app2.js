// Require minimongo 
var minimongo = require("minimongo");
 
var IndexedDb = minimongo.IndexedDb;
 
// Create IndexedDb 
db = new IndexedDb({namespace: "mydb"}, function() {
    // Add a collection to the database 
    db.addCollection("animals", function() {
        doc = { species: "dog", name: "Bingo" };
 
        // Always use upsert for both inserts and modifies 
        db.animals.upsert(doc, function() {
            // Success: 
 
            // Query dog (with no query options beyond a selector) 
            db.animals.findOne({ species:"dog" }, {}, function(res) {
                console.log("Dog's name is: " + res.name);
            });
        });
    });
}, function() { console.log("some error!"); });