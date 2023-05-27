// Find the duplicate number in an array and display them

let arr = [2, 5, 6, 1, 2, 5, 3, 0];
let duplicateNumbers = arr.filter(
  (index, value) => arr.indexOf(value) !== index
);
console.log(duplicateNumbers);
