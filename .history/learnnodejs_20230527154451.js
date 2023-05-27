const greet = require("./learnnode");
const count = require("./learnnode");
const path = require("path");

const actualPathObj = path.parse(__filename);
console.log(actualPathObj);

greet("Punit");
count(1);
