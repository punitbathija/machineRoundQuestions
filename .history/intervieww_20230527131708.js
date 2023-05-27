//Debouncing in javascript

const query = document.getElementById("query");

const getData = () => {
  console.log("Fetching data...");
  console.log(query.innerHTML);
};

const doMagic = function (fn, delay) {
  return function () {
    setTimeout(() => {
      getData();
    }, delay);
  };
};

const betterFunction = doMagic(getData, 3000);
