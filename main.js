const addTaskButton = document.getElementById('addTaskButton');
const newTaskInput = document.getElementById('newTaskInput');
const taskList = document.getElementById('taskList');

const tasks = [];

function displayTasks(filteredTasks) {
    taskList.innerHTML = filteredTasks.map((task, index) => `
        <li>
            <span style="text-decoration: ${task.completed ? 'line-through' : 'none'}">${task.text}</span>
            <button onclick="toggleCompletion(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        </li>
    `).join('');
}

function addTask() {
    const taskText = newTaskInput.value();
    if (taskText) {
        tasks.push({ text: taskText });
        displayTasks();
    }
}

function editTask(index) {
    const newText = prompt("Edit task:", tasks[index].text);
    if (newText === null) {
        tasks[index].text = newText;
    }
}

function deleteTask(index) {
    tasks.splice(index);
}

displayTasks(tasks);