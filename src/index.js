const createNewTaskButton = document.querySelector("input[type='submit']")
const userInput = document.querySelector("input[type='text']")
const todoList = document.querySelector("ul#tasks")
const priority = document.getElementById("priority")
const highPriority = []
const mediumPriority = []
const lowPriority = []

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  createNewTaskButton.addEventListener("click", function(event){
    event.preventDefault()

    let listItem = document.createElement('li')
    let deleteButton = document.createElement('button')

    listItem.innerHTML = userInput.value

    if (priority.value === "high") {
      listItem.style.color = "red"
      highPriority.push(listItem)
    }
    else if (priority.value === "medium") {
      listItem.style.color = "orange"
      mediumPriority.push(listItem)
    }
    else if (priority.value === "low"){
      listItem.style.color = "green"
      lowPriority.push(listItem)
    }
    
    deleteButton.innerHTML = "x"
    listItem.appendChild(deleteButton)

    deleteButton.addEventListener('click', function(e) {
      listItem.remove()
    }) 

    todoList.appendChild(listItem)
    const allItems = [...highPriority, ...mediumPriority, ...lowPriority]
    todoList.innerHTML = ''
    allItems.forEach(function(task) {todoList.appendChild(task)})

  })

});
