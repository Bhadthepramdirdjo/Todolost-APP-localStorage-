let tasks = [];

function renderTasks() {
    const taskList = document.querySelector("#taskList tbody");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td class="${task.completed ? 'completed' : ''}">${task.name}</td>
            <td>${task.completed ? 'Sudah' : 'Belum'}</td>
            <td>
                <button onclick="toggleCompleted(${index})">${task.completed ? 'X' : '✓'}</button>
                <button onclick="deleteTask(${index})">❌</button>
            </td>`;
        taskList.appendChild(tr);
    });
}

function toggleCompleted(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskName = taskInput.value.trim();
    if (taskName !== "") {
        const newTask = {
            name: taskName,
            completed: false // Inisialisasi completed menjadi false
        };
        tasks.push(newTask);
        taskInput.value = "";
        renderTasks();
    } else {
        alert("Please enter a task!");
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

renderTasks();
