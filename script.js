function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = taskInput.value;

    // Create delete button
    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = function () {
      li.remove();
    };

    li.appendChild(deleteBtn); // Add delete button to task
    taskList.appendChild(li);  // Add task to list
    taskInput.value = "";      // Clear input
  }
}
