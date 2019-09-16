document.addEventListener("DOMContentLoaded", () => {
  
  // As a user, I should be able to type a task into the input field.
  const text = document.getElementById('new-task-description').value;

  // As a user, I should be able to click some form of a submit button.
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    addToDo();
    button.onfocus="this.value=''"
  });

  // As a user, the task string that I provided should appear on the DOM after the submit button has been activated.

  function addToDo() {
    let tasks = document.getElementById('tasks')
    let newTask = document.createElement('li')
    let lastTask = tasks.appendChild(newTask)
    lastTask.innerHTML = document.getElementById('new-task-description').value;
  }


  // function addDelete() {
  //   let last
  // }

  // function toDelete() {
  //   let deleteButton = document.getElementById()
  // }

});
