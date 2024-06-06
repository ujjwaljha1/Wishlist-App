let todoInput = document.querySelector(".input");
let addTodoButton = document.querySelector(".button");
let showTodos=document.querySelector(".todos-container")
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
    renderTodoList(todoList)
});

function renderTodoList(todoList){
    console.log(todoList)
    showTodos.innerHTML=todoList.map(({id,todo,isCompleted}) => `<div><input id="item-${id}"type="checkbox" data-key=${id}><label for="item-${id} class="todo" data-key=${id}>${todo}</label><button>Delete</button></div>`)
}


showTodos.addEventListener("click",(e)=>{
    let key=e.target.dataset.key;
    console.log(key);
    console.log(e.target)
})

renderTodoList(todoList)