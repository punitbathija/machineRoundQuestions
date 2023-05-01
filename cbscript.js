let bod = document.querySelector("body");
let cc = document.getElementById("cc");

function changeColor() {
  let colorCode = Math.floor(Math.random() * 16777215).toString(16);
  bod.style.backgroundColor = "#" + colorCode;
  cc.innerHTML = `Background Color Code is #${colorCode}`;
}

changeColor();
setInterval(changeColor, 5000);
