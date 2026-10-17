let z = 10;

function outer() {
  let z = 20;

  function inner() {
    let z = 30;
    console.log(z);
  }

  console.log(z);
  inner();
}

console.log(z);

outer();
