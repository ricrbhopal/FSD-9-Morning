const ar = ["Apple", 2.5, 199, "Himachal", "Kashmir", 1200, true, false];

console.log(ar);

const Fr_ar = ar.filter((item) => item > 100);
console.log(Fr_ar);

const FI = ar.find((item) => item === "Himachal");
console.log(FI);

const FIdx = ar.findIndex((item) => item === "Himachal");
console.log(FIdx);

const inc = ar.includes("Himachal");
console.log(inc);

const sm = ar.some((item) => item > 40);
console.log(sm);

const ev = ar.every((item) => item > 1);
console.log(ev);

const num = [20, 4, 12, 6, 18, 24, 32, 67];

let sum = num.reduce((sum = 0, item) => (sum += item));
console.log(sum);

// sum = 0;
// ar.forEach((item) => {
//   sum = sum + item;
// });

let sorted_num = num.sort(); //String Sorting

console.log(sorted_num);

let sorted_number = num.sort((a, b) => b - a);

console.log(sorted_number);

let sorted = ar.sort();

console.log(sorted);

const num1 = num.filter((item) => item > 10);

const num2 = num1.sort((a, b) => a - b);

console.log(num2);

const result = num
  .filter((item) => item > 20)
  .sort((a, b) => a - b)
  .map((item) => item - 10);

console.log(result);
