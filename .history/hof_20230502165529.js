const arr = [2, 4, 6, 8, 10, 1, 3, 5, 7];

function double(x) {
  return x * x;
}

function tripple(x) {
  return x * x * x;
}

function quadripple(x) {
  return x * x * x * x;
}

function binary(x) {
  return x.toString(2);
}

function oddNumbers(x) {
  return x % 2;
}

function evenNumbers(x) {
  return x % 2 === 0;
}

// const output = arr.map(binary);

const output = arr.filter(evenNumbers);

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function findProduct(arr) {
  let sum = 1;
  for (let i = 0; i < arr.length; i++) {
    sum = sum * arr[i];
  }
  return sum;
}
console.log(findSum(arr));
console.log(findProduct(arr));

console.log(output);
