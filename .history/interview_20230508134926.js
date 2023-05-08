// Question - find the repeated values in array and display them

let arr = [2, 6, 7, 2, 4, 7, 12, 55];

let dublicate = arr.filter((value, index, dub) => {
  return dub.indexOf(value) !== index;
});

console.log(dublicate);

// Question - find the product of the values and display them

let product = arr.reduce(function (acc, curr) {
  acc = acc * curr;
  return acc;
}, 1);

console.log(product);

// Question - find the sum of values and display them

let sum = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
