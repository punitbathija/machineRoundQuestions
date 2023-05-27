const greet = require("./learnnode");
const count = require("./learnnode"); // Custom made modules
const path = require("path"); // Inbuild Modules
const os = require("os");

const actualPathObj = path.parse(__filename);
console.log(actualPathObj);

const availableMemory = os.freemem();
console.log(availableMemory / 100000);

const totalMemory = os.totalmem();
console.log(totalMemory);

const workingTime = os.uptime();
console.log(workingTime);

greet("Punit");
count(1);
