let bod = document.querySelector("body");
console.log(bod);

function changeColor() {
  let colorCode = Math.floor(Math.random() * 16777215).toString(16);
  console.log(colorCode);
  bod.style.backgroundColor = "#" + colorCode;
}

setTimeout(changeColor(), 3000);
