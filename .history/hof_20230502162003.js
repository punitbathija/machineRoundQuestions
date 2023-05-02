const arr = [2, 4, 6, 8, 10];

function double(x) {
  return x * 2;
}

function tripple(x) {
  return x * 3;
}

function quadripple(x) {
  return x * 4;
}

function binary(x) {
  return x.toString(2);
}

const output = arr.map(tripple);

console.log(output);
