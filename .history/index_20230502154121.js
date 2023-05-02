// const btn = document.getElementById("btn");

// console.log("start");
// setTimeout(function () {
//   console.log("Callback");
// }, 5000);
// console.log("end");

// btn.addEventListener("click", function () {
//   alert("You have been bamboozeled");
// });

// console.log("Start");

// setTimeout(function () {
//   console.log("Callback Executed");
// }, 5000);

// let startDate = new Date().getTime();
// let endDate = startDate;
// while (endDate < startDate + 10000) {
//   endDate = new Date().getTime();
// }

// console.log("GEC Executed");

// const radius = [3, 4, 2, 1];
// const calculateArea = function (radius) {
//   const output = [];
//   for (i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };

// console.log(calculateArea(radius));

const radius = [3, 1, 2, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (radius, logic) {
  const output = [];
  for (i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));
