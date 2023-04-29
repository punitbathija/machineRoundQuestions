function count() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

count();

// Without var

function countwithVar() {
  for (var i = 1; i <= 5; i++) {
    function withVar(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
  }
  withVar(x);
}

countwithVar();

// With var
