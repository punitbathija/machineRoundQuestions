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

// const output = arr.map(binary);
const output = arr.filter(oddNumbers);

console.log(output);
