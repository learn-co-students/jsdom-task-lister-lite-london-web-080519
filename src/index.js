document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let button = document.querySelector("#submit");
  let list = document.querySelector("#tasks");

  button.addEventListener("click", function(event) {
    let content = document.querySelector("#new-task-description").value;
    createListItem(content);
    document.querySelector("#new-task-description").value = "";
    event.preventDefault();
  });

  function createListItem(task) {
    let item = document.createElement("li");
    let text = document.createTextNode(task);
    let remove = document.createElement("button");
    remove.textContent = "X";
    remove.addEventListener("click", function() {
      this.parentElement.remove();
    });
    item.appendChild(text);
    item.appendChild(remove);
    list.appendChild(item);
  }
});
