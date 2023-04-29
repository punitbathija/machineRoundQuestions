function count() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

count();
// Without var

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
// With var

function outer(b) {
  function inner() {
    console.log(a, b);
  }

  let a = 10;
  return inner;
}

var closure = outer("Hello world!");
closure();

// Crazy example of closure
