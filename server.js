//  Global Object instead of window object
//  Common JS Ex. It requires require
console.log("Hello World!");

console.log(global);

const os = require("os");
const path = require("path");

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);


console.log(path.dirname(__filename));
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))


const math = require('./math');

console.log(math.add(2,5));

const {add, subtract, multiply, divide} = require("./math");

console.log(add(8,9));
console.log(subtract(8,9));
console.log(multiply(8,9));
console.log(divide(8,9));
