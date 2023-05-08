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

console.log(sum);

// Question - Add an # before each string name in array

let programmingLanguages = [
  "javascript",
  "python",
  "rust",
  "ruby",
  "java",
  "C++",
  "C#",
];

let hasttags = programmingLanguages.map(function (lan) {
  return "#" + lan;
});

console.log(hasttags);

// Question Print a prymid using the star

const height = 5;

for (let i = 1; i <= height; i++) {
  let row = " ";
  for (let j = 1; j <= height - i; j++) {
    row += " ";
  }
  for (let k = 1; k <= 2 * i; k++) {
    row += "*";
  }
  console.log(row);
}

// Question Print prime numbers from 1 - 1

for (let i = 1; i <= 100; i++) {
  let flag = 0;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      flag = 1;
      break;
    }
  }

  if (i > 0 && flag == 0) {
    console.log(i);
  }
}

// Question -  Determine the largest and the smallest numver in an array

const largestNumber = Math.min(...arr);
const smallestNumber = Math.max(...arr);
