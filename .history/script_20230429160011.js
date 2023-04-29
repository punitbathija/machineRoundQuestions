function count() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

count();

// Without var

function count() {
  for (let i = 1; i <= 5; i++) {
    function withVar(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
  }
  withVar(i);
}

count();
