let bod = document.querySelector("body");
console.log(bod);

function changeColor() {
  let randomChar = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,";
  let randomNub = "1,2,3,4,5,6,7,8,9";
  let colorCode =
    "#" + Math.floor(Math.random() * randomChar * randomNub).toString(16);
    bod.style.backgroundColor = colorCode
}

setTimeout(function () {
    bod.
});
