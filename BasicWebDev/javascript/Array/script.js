const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let a = [2, 4, 6, 8, 10];

console.log(ar);
console.log(a);

ar[2] = 10;

a[2] = 20;

a = 20;

console.log(ar);
console.log(a);

for (var i = 0; i < ar.length; i++) {
  console.log(ar[i]);
}

ar.pop();
console.log(ar);

ar.push(10);
console.log(ar);

ar.shift();
console.log(ar);

ar.unshift(20);
console.log(ar);

const new_ar = ar.slice(2, 5);
console.log(new_ar);

const new_ar2 = ar.splice(2, 5);
console.log(new_ar2);

ar.forEach((item) => {
  console.log(item);
});

const new_ar4 = ar.forEach((item) => {
  item = item * 2;
  console.log(item);
  return item;
});

console.log(new_ar4);

const new_ar3 = ar.map((item) => {
  item = item * 2;
  console.log(item);
  return item;
});

console.log(new_ar3);



