// Find the duplicate number in an array and display them

let arr = [2, 4, 6, 8, 10, 12, 2, 4, 8];
let duplicateNumbers = arr.filter(
  (value, index) => arr.indexOf(value) !== index
);
console.log(`Duplicate Numbers are ${duplicateNumbers}`);

// Find the sum of the values and display them

let sum = arr.reduce((acc, curr) => (acc = acc + curr), 0);
console.log(`The sum is ${sum}`);

// Find the product of the values and display them

let product = arr.reduce((acc, curr) => (acc = acc * curr), 1);
console.log(`The product is ${product}`);
