//Debouncing in javascript

const query = document.getElementById("query").value;

const getData = () => {
  console.log("Fetching data...");
  console.log(query);
};

const doMagic = function (fn, delay) {
  return function () {
    setTimeout(() => {
      getData();
    }, delay);
  };
};

const betterFunction = doMagic(getData, 3000);
