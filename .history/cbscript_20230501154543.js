let bod = document.querySelector("body");
console.log(bod);

function changeColor() {
  let randomChar = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,";
  let randomNub = "1,2,3,4,5,6,7,8,9";
  let colorCode =var randomColor = Math.floor(Math.random()*16777215).toString(16);

  console.log(colorCode);
  bod.style.backgroundColor = colorCode;
}

setTimeout(changeColor(), 3000);
