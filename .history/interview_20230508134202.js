// Question - find the repeated values in array and display them

let arr = [2, 6, 7, 2, 4, 7, 12, 55];

let dublicate = arr.filter((value, dub) => {
  return dub.indexOf(value) !== value;
});

console.log(dublicate);
