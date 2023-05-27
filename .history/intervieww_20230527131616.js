//Debouncing in javascript

const query = document.getElementById("query");
console.log(query.innerText);

const getData = () => {
  console.log("Fetching data...");
};

const doMagic = function (fn, delay) {
  return function () {
    setTimeout(() => {
      getData();
    }, delay);
  };
};

const betterFunction = doMagic(getData, 3000);
