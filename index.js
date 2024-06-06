let todoInput = document.querySelector(".input");
let addTodoButton = document.querySelector(".button");
let todo;
let todoList = [];

/** Creating function to get unique id */
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (param) {
        let number = Math.random() * 16 | 0;
        let randomNumber = param === 'x' ? number : (number & 0x3 | 0x8);
        return randomNumber.toString(16);
    });
}

addTodoButton.addEventListener("click", (e) => {
    e.preventDefault();
    todo = todoInput.value;
    console.log(todo);
    if (todo.length > 0) {
        todoList.push({ id: uuid(), todo: todo, isCompleted: false });
    }
    console.log(todoList);
});
