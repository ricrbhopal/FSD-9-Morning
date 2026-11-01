const UL = document.getElementById("AlphaList");

console.log(UL);

const LI = document.createElement("li");

LI.textContent = "Elephant";

UL.appendChild(LI);

function removeUL() {
  UL.remove();
}

const BODY = document.querySelector("body");

const Container1 = document.createElement("div");
Container1.id = "courseContainer";

const H2 = document.createElement("h2");
H2.textContent = "Full Stack Web Development";

Container1.appendChild(H2);

BODY.appendChild(Container1);

const practiceTasks = [
  "Review lesson notes",
  "Practice coding examples",
  "Complete class work",
  "Revise important concepts",
];

const OL = document.getElementById("practiceList");

practiceTasks.forEach((task) => {
  const LI = document.createElement("li");
  LI.textContent = task;
  OL.appendChild(LI);
});
