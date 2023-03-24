function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const newTask = document.createElement("li");
        const taskText = document.createTextNode(taskInput.value);
        newTask.appendChild(taskText);

        const removeButton = document.createElement("button");
        removeButton.className = "removeBtn";
        removeButton.textContent = "❌";
        removeButton.onclick = function () {
            taskList.removeChild(newTask);
        };
        newTask.appendChild(removeButton);

        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}

function removeTask(task) {
    task.parentElement.remove();
}

const taskInput = document.getElementById("taskInput");

taskInput.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addTask();
    }
});