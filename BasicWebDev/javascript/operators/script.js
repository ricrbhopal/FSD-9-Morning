let a = 20;
let b = 30;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

if (a > b) console.log("A is Big");
else console.log("B is Big");

console.log(a > b ? "A is Big" : "B is Big");

let m = 5;
let n = "5";

console.log(m == n);

console.log("1. Add");
console.log("2. Subtract");
console.log("3. multiply");
console.log("4. divide");

let choice = 2;

switch (choice) {
  case 1: {
    console.log(a + b);
    break;
  }
  case 2: {
    console.log(a - b);
    // break;
  }
  case 3: {
    console.log(a * b);
    break;
  }
  case 4: {
    console.log(a / b);
    break;
  }
  default: {
    console.log("Wrong Choice");
  }
}

console.log("If-else-if");

if (choice === 1) {
  console.log(a + b);
} else if (choice === 2) {
  console.log(a - b);
} else if (choice === 3) {
  console.log(a * b);
} else if (choice === 4) {
  console.log(a / b);
} else {
  console.log("Wrong choice");
}

for (var i = 0; i < 10; i++) {
  if (i === 5) continue;
  console.log("Loop Working", i);
}

let x = 20;

console.log(typeof x);
console.log(x);

let y = String(x);

console.log(typeof y);
console.log(y);

let d = "2025";
let e = Number(d);
console.log(e);
