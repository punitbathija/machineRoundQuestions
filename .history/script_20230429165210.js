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

function outest() {
  function outer(b) {
    var c = 20;
    function inner() {
      console.log(a, b, c);
    }

    let a = 10;
    return inner;
  }
  return outer;
}
var closure = outest()("Hello world!");
closure();

// Crazy example of closure

function counter() {
  var count = 0;
  return function incrementCounter() {
    count++;
    console.log(count);
  };
}

var counterPlusOne = counter();
counterPlusOne();
counterPlusOne();
counterPlusOne();
counterPlusOne();

// Data encapsulation with closures

function completeCounter() {
  var count = 0;
  this.incrementCounter = function () {
    count++;
    console.log(count);
  };

  this.decrementCounter = function () {
    count++;
    console.log(count);
  };
}
