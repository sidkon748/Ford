const addTaskButton = document.getElementById('addTaskButton');
const newTaskInput = document.getElementById('newTaskInput');
const taskList = document.getElementById('taskList');
const allTasksButton = document.getElementById('allTasks');
const completedTasksButton = document.getElementById('completedTasks');
const pendingTasksButton = document.getElementById('pendingTasks');

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

displayTasks(tasks);