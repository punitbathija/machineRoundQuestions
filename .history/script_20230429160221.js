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
  for (let i = 1; i <= 5; i++) {
    function withVar(c) {
      setTimeout(function () {
        console.log(c);
      }, i * 1000);
    }
  }
  withVar(c);
}

countwithVar();

// With var
