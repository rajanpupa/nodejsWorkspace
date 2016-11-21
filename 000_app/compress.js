var zlib = require('zlib');
var input = "Hellow world, "+
"I am testing the compressibality and decompressibality of string in nodejs but not sure if i will be able to save and data by this method,"
+ " I am testing the compressibality and decompressibality of string in nodejs but not sure if i will be able to save and data by this method."
+ " I am testing the compressibality and decompressibality of string in nodejs but not sure if i will be able to save and data by this method."
+ " I am testing the compressibality and decompressibality of string in nodejs but not sure if i will be able to save and data by this method."
+ " I am testing the compressibality and decompressibality of string in nodejs but not sure if i will be able to save and data by this method."
;

var deflated = zlib.deflateSync(input).toString('base64');

console.log(deflated.length +"-> " + deflated + "\n\n");

var inflated = zlib.inflateSync(new Buffer(deflated, 'base64')).toString();

console.log(inflated.length + "-> " + inflated);