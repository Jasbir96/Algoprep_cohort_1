// 1. select everything that will be required
const input = document.querySelector("input");
const button = document.querySelector("button");
const taskList = document.querySelector(".list");

// 2. user intercation
const inputHandler = function () {
    // click -> value get
    const newTask = input.value;
    if (newTask.length == 0)
        return;
    /*****addTask******/
    // element create 
    const taskElem = createTask(newTask);
    // append 
    taskList.appendChild(taskElem);
    // clear the input
    input.value = "";

    const deleteBtn = taskElem.children[1];

    deleteBtn.addEventListener("click", function () {
        taskElem.remove();
    })
}

function createTask(newTask) {
    const div = document.createElement("div");
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = "Delete";
    li.textContent = newTask;

    div.appendChild(li);
    div.appendChild(button);
    return div;


}

button.addEventListener("click", inputHandler);

// const secondBtn = document.querySelector(".second");

// secondBtn.addEventListener("click", function () {
//     const name = prompt("What is your name");
//     console.log("name", name);
// })


