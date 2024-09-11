document.addEventListener("DOMContentLoaded", () => {
    const ftList = document.getElementById('ft_list');
    const newTaskBtn = document.getElementById('newTaskBtn');

    // Load tasks from cookies
    loadTasks();

    // Create new task
    newTaskBtn.addEventListener('click', () => {
        const task = prompt("Enter a new TO DO:");
        if (task) {
            addTask(task);
            saveTasks();
        }else {
            alert("Task name must not empty 🫵😠")
        }
    });

    // Add task to list
    function addTask(taskText) {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        taskDiv.textContent = taskText;
        taskDiv.addEventListener('click', () => removeTask(taskDiv));
        ftList.appendChild(taskDiv);
    }

    // Remove task
    function removeTask(taskDiv) {
        const confirmDelete = confirm("Do you want to delete this TO DO?");
        if (confirmDelete) {
            taskDiv.remove();
            saveTasks();
        }
    }

    // Save tasks to cookies
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('.task').forEach(task => {
            tasks.push(task.textContent);
        });
        document.cookie = `tasks=${JSON.stringify(tasks)}; path=/`;
    }

    // Load tasks from cookies
    function loadTasks() {
        const cookies = document.cookie.split('; ');
        const tasksCookie = cookies.find(cookie => cookie.startsWith('tasks='));
        if (tasksCookie) {
            const tasks = JSON.parse(tasksCookie.split('=')[1]);
            tasks.forEach(task => addTask(task));
        }
    }
});
