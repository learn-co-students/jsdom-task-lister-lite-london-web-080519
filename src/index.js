const newTaskButton = document.querySelector("input[type='submit']")
const textField = document.querySelector("input[type='text']")
const toDoList = document.querySelector("ul#tasks");
const prioritySelect = document.querySelector("select#priority")

function getAllTasks() {
  return document.querySelectorAll('ul#tasks li')
}


document.addEventListener("DOMContentLoaded", () => {

  newTaskButton.addEventListener("click", e => {
    e.preventDefault();
    const input = textField.value
    let listItem = document.createElement('li')
    let button = document.createElement('button');
    button.innerText = 'X'
    listItem.innerHTML = `${input} `;
    if (prioritySelect.value === "high") {
      listItem.style.color = "red";
    } else if (prioritySelect.value === "medium") {
      listItem.style.color = "orange";
    } else {
      listItem.style.color = 'green';
    }

    listItem.appendChild(button)

    button.addEventListener('click', e => {
      listItem.remove()
    })

    toDoList.appendChild(listItem)

    let items = Array.from(getAllTasks())
    let highPriority = items.filter(task => task.style.color === 'red')
    let mediumPriority = items.filter(task => task.style.color === 'orange')
    let lowPriority = items.filter(task => task.style.color === 'green')
    
    let orderedTasks = [...highPriority, ...mediumPriority, ...lowPriority]
    toDoList.innerHTML = '';
    orderedTasks.forEach(function(task) {toDoList.appendChild(task)})
  });



});
