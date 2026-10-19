const abc = (a, b) => {
  let c = a + b;
  return c;
};

let result = abc(5, 3);

console.log(result);

const abc2 = (a, b) => {
  let c = a + b;
  console.log(c);
};

abc2(3, 6);

//Call Back Function

function sum(a, b) {
  let x = a * a;
  let y = b * b;
  return x + y;
}
function sub(a, b) {
  let x = a + a;
  let y = b + b;
  return x - y;
}

function calculate(p, q, anuj) {
  let m = p + 5;
  let n = q + 5;

  console.log(anuj(m, n));
}

calculate(2, 3, sum);
calculate(2, 3, sub);

calculate(5, 6, (a, b) => {
  return a * b;
});

calculate(3, 4, (a, b) => a / b);

calculate(5, 4, (a, b) => a % b);

function createGreeting() {
  return function () {
    console.log("Hello, Students!");
  };
}

const greet1 = createGreeting();

console.log(greet1);

greet1();

//closure

function outer() {
  let message = "Hello, Students!";

  function inner() {
    console.log(message);
  }

  return inner;
}

const greet = outer();

greet();
