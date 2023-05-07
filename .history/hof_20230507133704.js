const arr = [2, 4, 6, 8, 10, 1, 3, 5, 7];
const newArr = [1, 2, 3];

function double(x) {
  return x * x;
}

function tripple(x) {
  return x * x * x;
}

function quadriple(x) {
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

function findProduct(newArr) {
  let sum = 1;
  for (let i = 0; i < newArr.length; i++) {
    sum = sum * newArr[i];
  }
  return sum;
}
console.log(findSum(arr));
console.log(findProduct(newArr));

console.log(output);

const answer = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

console.log(answer);

const maxiumum = arr.reduce(function (acc, curr) {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

console.log(maxiumum);

const users = [
  { firstName: "Punit", lastName: "Bathija", age: 25 },
  { firstName: "Narendra", lastName: "Modi", age: 75 },
  { firstName: "Akshay", lastName: "Saini", age: 28 },
  { firstName: "Saadat", lastName: "Badgujar", age: 25 },
];

console.log(users.map((x) => x.firstName + " " + x.lastName));

const age = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(age);

// Total Hero Example
console.log(users.filter((x) => x.age <= 25).map((x) => x.firstName));

// Fetching an API
const GITHUB_API = "https://api.github.com/users/punitbathija";

const user = fetch(GITHUB_API);

// user.then(function (data) {
//   console.log(data);
// });

console.log(user);

cart = ["nike dunks", "levis jeans", "h&m t-shirt"];

//consuming a promise

const promise = createOrder(cart);

promise
  .then(function (orderId) {
    console.log("Order Successfull with Order Id:" + orderId);
  })
  .catch(alert("Order Failed while validatating cart"));

//Creating a promise

function validateCart() {
  return true;
}

function createOrder(cart) {
  const order = new Promise(function (res, rej) {
    if (!validateCart(cart)) {
      const err = new Error("cart is not valid");
      rej(err);
    }
    // logic of create order

    const orderId = "73318";
    if (orderId) {
      // Here there is a delay to simulate db operations
      setTimeout(function () {
        res(orderId);
      }, 5000);
    }
  });
  return order;
}

const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandParent.addEventListener(
  "click",
  function () {
    console.log("grandParent is clicked");
  },
  true
);

parent.addEventListener(
  "click",
  function () {
    console.log("parent is clicked");
  },
  true
);

child.addEventListener(
  "click",
  function () {
    console.log("child is clicked");
  },
  true
);

let multiply = function (x, y) {
  console.log(x * y);
};

multiply(3, 5);

let multipyByTwo = multiply.bind(this, 2);

multipyByTwo(2);
