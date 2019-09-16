document.addEventListener("DOMContentLoaded", () => {


  let button = document.querySelector("#submit");

   button.addEventListener("click", function(event) {
    let content = document.querySelector("#new-task-description").value;
    //console.log(content);
    add_item(content);
    event.preventDefault();
    document.querySelector("#new-task-description").value = ""
   });

  let list = document.querySelector("#tasks");
  
  function add_item (content) {
    var item = document.createElement("li");
    var text = document.createTextNode(content);
    var button = document.createElement("button");
    
    
    button.textContent = 'X';
    button.addEventListener ("click", function () {
      this.parentElement.remove();
    });
    item.appendChild(text);
    item.appendChild(button);
    list.appendChild(item);
    
  }




});
