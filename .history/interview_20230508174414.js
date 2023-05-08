// Question - find the repeated values in array and display them

let arr = [2, 6, 7, 2, 4, 7, 12, 55];

let dublicate = arr.filter(function (value, index) {
  return arr.indexOf(value) !== index;
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

// Question Print prime numbers from 1 - 100

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

// Question -  Print the largest and the smallest number in an array

const smallestNumber = Math.max(...arr);
const largestNumber = Math.min(...arr);

console.log(`Smallest number is ${smallestNumber}`);
console.log(`Largest number is ${largestNumber}`);

// Question - Print the missing numbers in an array integer print all number first and then just the missing numbers

// Part A

const numbers = [1, 4, 7, 8, 9, 10, 15, 22];

const minNumber = Math.min(...numbers);
const maxNumber = Math.max(...numbers);

for (let i = minNumber; i <= maxNumber; i++) {
  console.log(i);
}

// Part B

for (let i = minNumber; i <= maxNumber; i++) {
  if (!numbers.includes(i)) {
    console.log(i);
  }
}

// Print the next palndrone number after the given number

function getPalindroneNumber(num) {
  let stringnumber = String(num);

  if (stringnumber === stringnumber.split("").reverse().join("")) {
    num++;
    stringnumber = String(num);
  }
  while (stringnumber !== stringnumber.split("").reverse().join("")) {
    num++;
    stringnumber = String(num);
  }
  return num;
}

const inputNumber = prompt("Enter Number to check next palindrone number");
const nextPalindroneNumber = getPalindroneNumber(inputNumber);

console.log(`Next Palindrone number is ${nextPalindroneNumber}`);

// Auto Increment Counter

function count() {
  for (let i = 1; i <= 10; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

count();

// Print Fibonacci series upto desired number

const numb = prompt("Enter a number to get fibonacci series");
let numOne = 0,
  numTwo = 1,
  nextNum;

for (let i = 1; i < numb; i++) {
  console.log("Fibonacci series is as follows:- " + numOne);
  nextNum = numOne + numTwo;
  numOne = numTwo;
  numTwo = nextNum;
}

// Write a function which can tell if a group of characters can be probable palindrone string with diferrent combinations

function isProbablePalindrome(str) {
  const charCount = {}; // Initialize empty object to store character counts
  let oddCount = 0; // Initialize count of characters with odd frequency to 0

  // Count the frequency of each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1; // Increment the count of the character
  }

  // Check if there is at most one character with odd frequency
  for (let char in charCount) {
    if (charCount[char] % 2 !== 0) {
      oddCount++;
      if (oddCount > 1) {
        return false;
      }
    }
  }

  return true;
}

const input = "scam"; // This string can form a probable palindrome with different combinations

const isProbable = isProbablePalindrome(input);

if (isProbable) {
  console.log(
    `The string "${input}" can form a probable palindrome with different combinations.`
  );
} else {
  console.log(
    `The string "${input}" cannot form a probable palindrome with different combinations.`
  );
}

// Write a function to transform a string "javascript" to "#j#a#v#a#s#c#r#i#p#t"

function transformString(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += str[i];
    if (i !== str.length - 1) {
      newStr += "#";
    }
  }
  return newStr;
}

const stringInput = "javascript";
const transformed = transformString(stringInput);

console.log(transformed); // Output: "j#a#v#a#s#c#r#i#p#t"
