const arr = [2, 4, 6, 8, 10];

function double(x) {
  return x * x;
}

function tripple(x) {
  return x * x * x;
}

function quadripple(x) {
  return x * 4;
}

function binary(x) {
  return x.toString(2);
}

const output = arr.map(quadripple);

console.log(output);
