const addTaskButton = document.getElementById('addTaskButton');
const newTaskInput = document.getElementById('newTaskInput');
const taskList = document.getElementById('taskList');

const tasks = [];

function displayTasks() {
    taskList.innerHTML = tasks.map((task, index) => `
        <li>
            <span>${task.text}</span>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        </li>
    `).join('');
}

function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText });
        newTaskInput.value = '';
        displayTasks();
    }
}

addTaskButton.onclick = addTask;

function editTask(index) {
    const newText = prompt("Edit task:", tasks[index].text);
    if (newText !== null) {
        tasks[index].text = newText;
        displayTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

displayTasks(tasks);