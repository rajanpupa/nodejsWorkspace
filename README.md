# nodejsWorkspace

getting started with nodejs projects

This workspace will contain projects, on the increasing complexity basis of nodejs.

Node is a emerging language. Its mostly beneficial because of the following reasons.

  * It mostly required less memory to run compared to java and similar high level languages
  * It is totally based on javascript, and runs very fast
  * lots of libraries are available

### Few common things about node
 * Non Blocking IO. (In node, io results are handled in callback functions rather then blocking the thread.)
 * Nodejs uses module architecture, which is similar to library in c. eg. http module contains functions specific to HTTP.
 * Including a module is easy
```
// This causes Node to search for a node_modules folder in our application's directory
// will search for global module if not found there
var http = require('http');

// can also pass actual file path
var myModule = require('./myModule.js');
```

 * Modules are encapsulated pieces of code. The code within a module is mostly private
 * `exports` object is used to expose functions outside the module
```
var PI = Math.PI;

exports.area = function (r) {
  return PI * r * r;
};

exports.circumference = function (r) {
  return 2 * PI * r;
};
```

* The global scope in Node is GLOBAL (as opposed to window in the browser), and you can easily create a global variable of function by omitting the var keyword
* Node.js has a package manager, called Node Package Manager (NPM)
* To install a module
```
npm install module_name
```

#### References
http://code.tutsplus.com/tutorials/nodejs-for-beginners--net-26314



