const greet = require("./learnnode");
const count = require("./learnnode");
const path = require("path");

const actualPathObj = path.parse(__filename);

greet("Punit");
count(1);
