const greet = require("./learnnode");
const count = require("./learnnode"); // Custom made modules
const path = require("path"); // Inbuild Modules
const os = require("os");
const fs = require("fs");

const actualPathObj = path.parse(__filename);
console.log(actualPathObj);

const availableMemory = os.freemem();
console.log(availableMemory / 100000);

const totalMemory = os.totalmem();
console.log(totalMemory);

const workingTime = os.uptime();
console.log(workingTime);

const userInfo = os.userInfo();
console.log(userInfo);

const filesInFolder = fs.readFileSync("./");

greet("Punit");
count(1);
