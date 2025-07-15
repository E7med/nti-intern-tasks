var tasks = [];
var taskNameInput = document.getElementById('taskName');
var taskTypeSelect = document.getElementById('taskType');
var addTaskBtn = document.getElementById('addTaskBtn');
var taskListDiv = document.getElementById('taskList');

function showTasks() {
    var html = '<ul>';
    for (var i = 0; i < tasks.length; i++) {
        var color = 'red';
        if (tasks[i].taskType === 'In Progress') {
            color = 'orange';
        } else if (tasks[i].taskType === 'Done') {
            color = 'green';
        }
        html += '<li style="color:' + color + '">' +
            tasks[i].taskName + ' [' + tasks[i].taskType + '] ' +
            tasks[i].dateAdded +
            ' <button onclick="editTask(' + i + ')">Edit</button>' +
            ' <button onclick="deleteTask(' + i + ')">Delete</button>' +
            '</li>';
    }
    html += '</ul>';
    taskListDiv.innerHTML = html;
}

function addTask() {
    var name = taskNameInput.value.trim();
    var type = taskTypeSelect.value;
    if (name === '') {
        alert('Please enter a task name.');
        return;
    }
    var task = {
        taskName: name,
        taskType: type,
        dateAdded: new Date().toLocaleString()
    };
    tasks.push(task);
    showTasks();
    taskNameInput.value = '';
    taskTypeSelect.value = 'Task';
}

addTaskBtn.onclick = addTask;

window.editTask = function(index) {
    var newName = prompt('Edit task name:', tasks[index].taskName);
    if (newName === null || newName.trim() === '') return;
    var newType = prompt('Edit task type (Task, In Progress, Done):', tasks[index].taskType);
    if (newType !== 'Task' && newType !== 'In Progress' && newType !== 'Done') return;
    tasks[index].taskName = newName;
    tasks[index].taskType = newType;
    showTasks();
}

window.deleteTask = function(index) {
    tasks.splice(index, 1);
    showTasks();
}

showTasks(); 