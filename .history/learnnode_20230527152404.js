const greet = function (name) {
  console.log(`Hey good morning ${name}`);
};

const count = function (num) {
  console.log(`The counter is ${num++}`);
};

module.exports = greet;
module.exports = count;
