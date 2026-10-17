function abc() {
  console.log("This is Function");
}

abc();

function sum(a, b) {
  console.log(a + b);
}

sum(5, 3);

function greet(name) {
  console.log("Welcome to Javascript Class", name);
}

greet("Rani");

function mul(a, b) {
  let c = a * b;
  return c;
}

let answer = mul(5, 3);

console.log(answer);

function divide(a, b) {
  console.log(a / b);
}

divide(5);

//default parameters
function calc_intrest(p, r = 5, t = 1) {
  console.log("Principle =", p);
  console.log("Rate =", r);
  console.log("Time =", t);

  console.log((p * r * t) / 100);
}

calc_intrest(2000, 6, 2);
calc_intrest(2000, 8);
calc_intrest(2000);

//function expression
const xyz = function (x, y) {
  console.log("X = ", x);
  console.log("Y = ", y);
  console.log(x + y);
};

xyz(7, 8);
