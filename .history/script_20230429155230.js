function count() {
  for (let i = 1; 1 <= 10; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

count();
