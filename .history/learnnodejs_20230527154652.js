const greet = require("./learnnode");
const count = require("./learnnode"); // Custom made modules
const path = require("path"); // Inbuild Modules
const os = require("os");

const actualPathObj = path.parse(__filename);
console.log(actualPathObj);

const availableMemory = os.freemem();
console.log(availableMemory);

greet("Punit");
count(1);
