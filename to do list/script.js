function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("pendingTasks");
        var newTaskItem = document.createElement("li");
        newTaskItem.className = "pending";

        var taskSpan = document.createElement("span");
        taskSpan.className = "task-text";
        taskSpan.textContent = taskText;
        newTaskItem.appendChild(taskSpan);

        var dateSpan = document.createElement("span");
        dateSpan.className = "date-time";
        dateSpan.textContent = "Added on " + new Date().toLocaleString();
        newTaskItem.appendChild(dateSpan);

        var completeButton = document.createElement("button");
        completeButton.className = "complete";
        completeButton.textContent = "Complete";
        completeButton.onclick = function() {
            markComplete(newTaskItem);
        };
        newTaskItem.appendChild(completeButton);

        var editButton = document.createElement("button");
        editButton.className = "edit";
        editButton.textContent = "Edit";
        editButton.onclick = function() {
            var newText = prompt("Edit Task", taskSpan.textContent.trim());
            if (newText !== null && newText.trim() !== "") {
                taskSpan.textContent = newText.trim();
            }
        };
        newTaskItem.appendChild(editButton);

        var deleteButton = document.createElement("button");
        deleteButton.className = "delete";
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            this.parentNode.remove();
        };
        newTaskItem.appendChild(deleteButton);

        taskList.appendChild(newTaskItem);

        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

function markComplete(taskItem) {
    var taskList = document.getElementById("completedTasks");
    
    // Remove the complete button and edit button
    var completeButton = taskItem.querySelector(".complete");
    if (completeButton) {
        completeButton.remove();
    }
    var editButton = taskItem.querySelector(".edit");
    if (editButton) {
        editButton.remove();
    }
    
    // Update the date span with completion time
    var dateSpan = taskItem.querySelector(".date-time");
    dateSpan.textContent = "Completed on " + new Date().toLocaleString();
    
    taskItem.className = "completed";
    
    taskList.appendChild(taskItem);
}
