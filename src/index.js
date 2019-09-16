document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let form = document.querySelector('form');
  form.addEventListener("submit", userClick)

  function userClick(event) {
    console.log("I've been clicked")
    let taskList = document.querySelector("#list")
    let formField = document.querySelector("#new-task-description")
    let formDate = document.querySelector("#new-task-date")
    let userInput = formField.value + " - " + formDate.value
    let newTask = document.createElement("li")
    newTask.innerHTML = userInput
    taskList.appendChild(newTask)
    event.preventDefault()
  }
});
