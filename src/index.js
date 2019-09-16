document.addEventListener("DOMContentLoaded", () => {
  // your code here



let form = document.getElementById("create-task-form")
let formSubmit = document.getElementById("submit")

formSubmit.addEventListener("click", function(event){
  event.preventDefault();
  // let input = document.getElementById("new-task-description").value; 
  let li = document.createElement("li")
  let ul = document.getElementById('tasks')

  li.innerText = document.getElementById('new-task-description').value

  ul.appendChild(li)

  });


});
