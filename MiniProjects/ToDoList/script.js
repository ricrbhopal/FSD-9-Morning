function AddTask() {
  const newTask = document.getElementById("taskInput").value.trim();

  const LI = document.createElement("li");
  LI.classList.add("p-2");

  const SPAN = document.createElement("span");
  SPAN.textContent = newTask;

  const BUTTON = document.createElement("button");
  BUTTON.classList.add("btn", "btn-danger", "btn-sm", "mx-3");
  BUTTON.textContent = "Delete";
  BUTTON.onclick = () => LI.remove();

  LI.appendChild(SPAN);
  LI.appendChild(BUTTON);

  document.getElementById("TaskList").appendChild(LI);

  document.getElementById("taskInput").value = "";
}
