// Get the necessary elements from the DOM
const newTodoInput = document.getElementById('newTodoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

// Function to create a new to-do item
function createTodoItem(todoText) {
  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const todoTextSpan = document.createElement('span');
  todoTextSpan.textContent = todoText;
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';

  // Add event listener for checkbox change
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      listItem.classList.add('completed');
      todoList.appendChild(listItem);
    } else {
      listItem.classList.remove('completed');
      todoList.insertBefore(listItem, todoList.firstChild);
    }
  });

  // Add event listener for delete button
  deleteBtn.addEventListener('click', function () {
    listItem.remove();
  });

  listItem.appendChild(checkbox);
  listItem.appendChild(todoTextSpan);
  listItem.appendChild(deleteBtn);

  return listItem;
}

// Function to add a new to-do item
function addTodo() {
  const todoText = newTodoInput.value.trim();
  if (todoText === '') return;

  const listItem = createTodoItem(todoText);
  todoList.appendChild(listItem);

  // Clear the input field after adding the to-do
  newTodoInput.value = '';
}

// Add event listener for the 'Add' button
addTodoBtn.addEventListener('click', addTodo);

// Add event listener for Enter key press in the input field
newTodoInput.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    addTodo();
  }
});
