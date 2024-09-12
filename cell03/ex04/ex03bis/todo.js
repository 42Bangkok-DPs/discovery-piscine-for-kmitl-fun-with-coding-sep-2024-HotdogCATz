$(document).ready(function () {
    const $ftList = $('#ft_list');
    const $newTaskBtn = $('#newTaskBtn');

    // Load tasks from cookies
    loadTasks();

    // Create new task
    $newTaskBtn.click(function () {
        const task = prompt("Enter a new TO DO:");
        if (task) {
            addTask(task);
            saveTasks();
        } else {
            alert("Task name must not be empty");
        }
    });

    // Add task to list
    function addTask(taskText) {
        const $taskDiv = $('<div class="task"></div>').text(taskText);
        $taskDiv.click(function () {
            removeTask($taskDiv);
        });
        $ftList.append($taskDiv);
    }

    // Remove task
    function removeTask($taskDiv) {
        const confirmDelete = confirm("Do you want to delete this TO DO?");
        if (confirmDelete) {
            $taskDiv.remove();
            saveTasks();
        }
    }

    // Save tasks to cookies
    function saveTasks() {
        const tasks = [];
        $('.task').each(function () {
            tasks.push($(this).text());
        });
        document.cookie = `tasks=${encodeURIComponent(JSON.stringify(tasks))}; path=/`;
    }

    // Load tasks from cookies
    function loadTasks() {
        const cookies = document.cookie.split('; ');
        const tasksCookie = cookies.find(cookie => cookie.trim().startsWith('tasks='));
        if (tasksCookie) {
            try {
                const tasks = JSON.parse(decodeURIComponent(tasksCookie.split('=')[1]));
                tasks.forEach(task => addTask(task));
            } catch (e) {
                console.error("Error", e);
                alert("Error loading tasks.");
                document.cookie = "tasks=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            }
        }
    }
});
