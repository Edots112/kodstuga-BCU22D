let newTodo = document.getElementById("newTodo");
let saveTodoBtn = document.getElementById("saveTodoBtn");
let todoListUi = document.getElementById("todoListUi");

let todoList = [];

function printList() {

    todoListUi.innerHTML = "";

    todoList.map(todo => {
   // console.log("mappar", todo);

    let todoItem = document.createElement("li")
    todoItem.innerText = "Gör: " + todo;
    todoItem.id = todo;
    todoItem.addEventListener("click", (event) => {
        console.log("Click på item", event.target.id);
        todoList = todoList.filter(todo => todo !== event.target.id)
        printList();
    })
    todoListUi.appendChild(todoItem);
    }); 
};

saveTodoBtn.addEventListener("click", () => {
    let saveTodo = newTodo.value;
    todoList.push(saveTodo);
    console.log("new todo list", todoList);
    newTodo.value = "";
    printList();
})

printList();








