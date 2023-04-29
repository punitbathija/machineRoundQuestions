// function count(){
//     for(let i = 1; i <= 5; i++){
//       setTimeout(function (){
//         console.log(i);
//       }, i * 1000)
//     }
// }

// count()

function countWVar() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
}

countWVar();
