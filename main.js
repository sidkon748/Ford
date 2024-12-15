// Event listeners for interacting with the list of tasks
const addTaskButton = document.getElementById('addTaskButton');
const newTaskInput = document.getElementById('newTaskInput');
const taskList = document.getElementById('taskList');

// Creates  empty tasks array
const tasks = [];

// Function to display tasks in the list
function displayTasks() {
    taskList.innerHTML = tasks.map((task, index) => `
        <li>
            <span>${task.text}</span>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        </li>
    `).join('');
}

// Function to add tasks to the list
function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText });
        newTaskInput.value = '';
        displayTasks();
    }
}

// Attach addTask function to button click event
addTaskButton.onclick = addTask;

// Function to edit tasks in the list
function editTask(index) {
    const newText = prompt("Edit task:", tasks[index].text);
    if (newText !== null) {
        tasks[index].text = newText;
        displayTasks();
    }
}

// Function to delete tasks in the list
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Initiates display function for usage
displayTasks(tasks);