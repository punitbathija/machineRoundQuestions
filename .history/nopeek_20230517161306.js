// Find the duplicate number in an array and display them

let arr = [2, 4, 6, 8, 10, 12, 2, 4, 8];
let duplicateNumbers = arr.filter(
  (value, index) => arr.indexOf(value) !== index
);
console.log(`Duplicate numbers are ${duplicateNumbers}`);

// Find the sum of the values and display them

let sum = arr.reduce((acc, curr) => (acc = acc + curr), 0);
console.log(`The sum is ${sum}`);

// Find the product of the values and display them

let product = arr.reduce((acc, curr) => (acc = acc * curr), 1);
console.log(`The product is ${product}`);

// Add an # in berofe every string in array

let programmingLanguages = ["javascript", "python", "rust", "java", "ruby"];
let hashtag = programmingLanguages.map(
  (programmingLanguage) => `#${programmingLanguage} `
);
console.log(hashtag.toString());

// Print a prymid structure with height 5 inside of javascript console

let output = "";
let rows = 5;
for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= rows - i; j++) {
    output += " ";
  }
  for (let k = 1; k <= i; k++) {
    output += "* ";
  }
  output += "\n";
}

console.log(output);

// Print prime numbers from 1 to 100

function printPrimes(n) {
  const primeNumbers = [];
  let count = 0;
  let num = 2;
  while (count < n) {
    if (isPrime(num)) {
      primeNumbers.push(num);
      count++;
    }
    num++;
  }
  console.log(primeNumbers);
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }
}
printPrimes(100);
