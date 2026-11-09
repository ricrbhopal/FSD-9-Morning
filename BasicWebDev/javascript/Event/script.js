document
  .getElementById("submitButton")
  .addEventListener("click", submitFunction);

function submitFunction() {
  const num = Math.floor(Math.random() * 100);
  document.getElementById("submitButton").innerText = `Submit Done ${num}`;

  //remnove the Event

  if (num % 5 === 0) {
    document
      .getElementById("submitButton")
      .removeEventListener("click", submitFunction);
  }
}

document.querySelector("body").addEventListener("keydown", KeyPressed);

function KeyPressed(e) {
  const key = e.key;

  console.log(key);
}

const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandparent.addEventListener("click", grandparentfunction);

parent.addEventListener("click", parentFunction);

child.addEventListener("click", childFunction);

function grandparentfunction() {
  console.log("Grandparent");
}

function parentFunction() {
  console.log("Parent");
}

function childFunction() {
  console.log("Child");
}

document.getElementById("studentList").addEventListener("click", (e) => {
  console.log(e.target.innerText);
});

document.getElementById("sampleForm").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form Submitted");
});
