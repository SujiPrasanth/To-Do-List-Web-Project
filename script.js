let submit = document.getElementById("submit");
let addtask = document.getElementById("addtask");
let pend = document.getElementById("pend");
let donelist = document.getElementById("complete");

let list = [];

function addtaskf() {
    let taskText = addtask.value.trim();
    if (taskText !== "") {
        list.push(taskText);
        addPendingTask(list.length - 1, taskText);
        addtask.value = "";
    }
}

function addPendingTask(id, text) {
    let li = document.createElement("li");
    li.id = `pending-${id}`;
    let btn = document.createElement("button");
    btn.textContent = text;
    btn.onclick = function () {
        moveToCompleted(id);
    };
    li.appendChild(btn);
    pend.appendChild(li);
}

function moveToCompleted(id) {
    let taskText = list[id];

    let li = document.createElement("li");
    li.id = `completed-${id}`;
    li.textContent = taskText;
    li.onclick = function () {
        li.remove();
    };

    donelist.appendChild(li);
    
    let taskElement = document.getElementById(`pending-${id}`);
    if (taskElement) taskElement.remove();
}

submit.addEventListener('click', addtaskf);

addtask.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        addtaskf();
    }
});

