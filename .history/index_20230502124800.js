const btn = document.getElementById("btn");

console.log("start");
setTimeout(function () {
  console.log("Callback");
}, 5000);
console.log("end");

btn.addEventListener("click", function () {
  alert("You have been bamboozeled");
});
