document.addEventListener("DOMContentLoaded", () => {
  const newToDoForm = document.getElementById("create-task-form")
  const TaskList = document.getElementById("tasks");

  //attach event listeners
  newToDoForm.addEventListener("submit", createNewTask);
});

function createNewTask(event){
  event.preventDefault();
  const newToDoDescription = document.getElementById("new-task-description");
  const newToDo = document.createElement("li");
  newToDo.innerText = newToDoDescription.value;

  appendNewTask(newToDo);
  event.target.reset();
};

function appendNewTask(task){
  document.getElementById("tasks").appendChild(task);
};