document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
    document.getElementById('submit').addEventListener('click', function(event) {
      // prevent Default code
      event.preventDefault();
      let ul = document.querySelector('ul')
      // create a li element
      let li = document.createElement('li')
      //  grab what entered in the form
      let myTextBox = document.getElementById('new-task-description').value;
      li.innerText = myTextBox;
      // append it as a child to the ul element
      ul.appendChild(li)
    }, false);

  });
  
  
  // I should be able to type a task into the input field.
  // I should be able to click some form of a submit button.
  // the task string that I provided should appear on the DOM after the submit button has been activated.
