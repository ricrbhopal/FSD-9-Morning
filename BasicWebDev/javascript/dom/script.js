const D = document.querySelector("div");
const H = document.querySelector("h1");
const P = document.querySelector("p");

console.log(D);
console.log(H);
console.log(P);

console.log(D.textContent);

const O = document.querySelector("ol");

console.log(O.innerHTML);
console.log(O.innerText);
console.log(O.textContent);

const D1 = document.getElementById("d1");
const D2 = document.getElementById("d2");
const D3 = document.getElementById("d3");

console.log(D1.textContent);
console.log(D2.textContent);
console.log(D3.textContent);

const P1 = document.querySelector("#p1");
const H1 = document.querySelector(".heading");

console.log(P1.textContent);
console.log(H1.textContent);

const DIV = document.querySelectorAll("div");

console.log(DIV);

DIV.forEach((item) => {
  console.log(item.textContent);
});

P1.textContent = "This is new Content";

const IN = document.getElementById("hello");

IN.type = "password";

IN.id = "hi";

document.getElementById("hi").placeholder = "this is Something";

const clickButton = document.getElementById("clickbtn");

clickButton.style.backgroundColor = "blue";

const H2 = document.getElementById("h2");

H2.classList.add("bg-primary");
H2.classList.add("text-light");
H2.classList.add("px-2", "py-3", "text-center");

H2.classList.remove("rounded-5");
