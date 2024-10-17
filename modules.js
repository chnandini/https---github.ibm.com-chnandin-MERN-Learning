// argument is an array in Javascript
// console.log(arguments);

// console.log(require("module").wrapper);

//module.exports
const C = require("./test-module");
const calc1 = new C();
console.log(calc1.add(6,6));

//Using exports
// const calc2 = require("./test-module-2");
const {add,multiply} = require("./test-module-2");
console.log(multiply(1,2));

//Caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();

