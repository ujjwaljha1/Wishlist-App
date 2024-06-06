// Select the input field, add button, and the container to display todos
let todoInput = document.querySelector(".input");
let addTodoButton = document.querySelector(".button");
let showTodos = document.querySelector(".todos-container");
let todo;
let todoList = [];

/** 
 * Function to generate a unique ID
 * Uses a template string to create a UUID-like string
 */
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (param) {
        let number = Math.random() * 16 | 0;
        let randomNumber = param === 'x' ? number : (number & 0x3 | 0x8);
        return randomNumber.toString(16);
    });
}

// Add event listener to the "Add Todo" button
addTodoButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form submission
    todo = todoInput.value; // Get the value of the input field
    if (todo.length > 0) { // Check if the input is not empty
        // Add the new todo to the todoList with a unique ID and isCompleted set to false
        todoList.push({ id: uuid(), todo: todo, isCompleted: false });
    }
    renderTodoList(todoList); // Render the updated todo list
});

// Function to render the list of todos
function renderTodoList(todoList) {
    // Map each todo item to an HTML string and join them into one string
    showTodos.innerHTML = todoList.map(({ id, todo, isCompleted }) => `
        <div>
            <!-- Checkbox to mark todo as completed or not -->
            <input id="item-${id}" type="checkbox" data-key="${id}" ${isCompleted ? 'checked' : ''}>
            <!-- Label showing the todo text -->
            <label for="item-${id}" class="todo todo-text t-pointer ${isCompleted ? 'checked-todo' : ''}" data-key="${id}">
                ${todo}
            </label>
            <!-- Button to delete the todo item -->
            <button data-key="${id}" class="delete-btn">Delete</button>
        </div>
    `).join(''); // Join array of strings into one string
}

// Add event listener to the container that shows todos
showTodos.addEventListener("click", (e) => {
    let key = e.target.dataset.key; // Get the key of the clicked element
    // Check if the clicked element is a checkbox or label
    if (e.target.type === "checkbox" || e.target.tagName === "LABEL") {
        // Toggle the isCompleted status of the corresponding todo item
        todoList = todoList.map(todo => todo.id === key ? { ...todo, isCompleted: !todo.isCompleted } : todo);
        renderTodoList(todoList); // Render the updated todo list
    }
    // Check if the clicked element is the delete button
    if (e.target.classList.contains("delete-btn")) {
        // Filter out the todo item to be deleted from the todoList
        todoList = todoList.filter(todo => todo.id !== key);
        renderTodoList(todoList); // Render the updated todo list
    }
});

// Initial render to display any pre-existing todos
renderTodoList(todoList);
