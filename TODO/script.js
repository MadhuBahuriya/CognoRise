document.addEventListener('DOMContentLoaded', function () {
    loadTasks();
  });
  
  function loadTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
  
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    tasks.forEach(function (task, index) {
      const taskItem = document.createElement('div');
      taskItem.classList.add('task-item');
      taskItem.innerHTML = `
        <span>${task}</span>
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
      `;
  
      taskList.appendChild(taskItem);
    });
  }
  
  function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const newTask = newTaskInput.value.trim();
  
    if (newTask !== '') {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      newTaskInput.value = '';
      loadTasks();
    }
  }
  
  function editTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTask = prompt('Edit Task:', tasks[index]);
  
    if (updatedTask !== null) {
      tasks[index] = updatedTask.trim();
      localStorage.setItem('tasks', JSON.stringify(tasks));
      loadTasks();
    }
  }
  
  function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
  }
  