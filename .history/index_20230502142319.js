// const btn = document.getElementById("btn");

// console.log("start");
// setTimeout(function () {
//   console.log("Callback");
// }, 5000);
// console.log("end");

// btn.addEventListener("click", function () {
//   alert("You have been bamboozeled");
// });

console.log("Start");

setTimeout(function () {
  console.log("Callback Executed");
}, 5000);

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("GEC Executed");