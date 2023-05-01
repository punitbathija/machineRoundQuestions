let bod = document.querySelector("body");
let cc = document.querySelector("cc");
console.log(bod, cc);

function changeColor() {
  let colorCode = Math.floor(Math.random() * 16777215).toString(16);
  bod.style.backgroundColor = "#" + colorCode;
  cc.innerHTML = `colorCode is #${colorCode}`;
}

setInterval(changeColor(), 3000);
