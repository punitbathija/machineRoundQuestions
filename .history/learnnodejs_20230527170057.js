const greet = require("./learnnode");
const count = require("./learnnode"); // Custom made modules
const path = require("path"); // Inbuild Modules
const os = require("os");
const fs = require("fs");
const EventEmitter = require("events");
const emmiter = new EventEmitter();
const http = require("http");

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

const filesInFolder = fs.readdirSync("./");
console.log(filesInFolder);

emmiter.on("messageLogged", function (e) {
  console.log("Listener Called", e);
});

emmiter.emit("messageLogged", { id: 1, url: "http://" });

emmiter.on("logginIn", function (e) {
  console.log("User logged in as ", e);
});

emmiter.emit("logginIn", { id: 101, data: "Punit Bathija" });

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }
});

server.listen(3000);

console.log("listening on port 3000");

greet("Punit");
count(1);
