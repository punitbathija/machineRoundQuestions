// Find the duplicate number in an array and display them

let arr = [2, 4, 6, 8, 10, 12, 2, 4, 8];
let duplicateNumbers = arr.filter(
  (value, index) => arr.indexOf(value) !== index
);
console.log(duplicateNumbers);

// Find the product of the values and display them

let product = arr.reduce((acc, curr) => (acc = acc + curr));
console.log(product);
