// Selection of elements
const inputElememts = document.getElementById("taskInput");
const taskBtn = document.getElementById("taskButton");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((task) => addTaskToDOM(task));
});

const saveTasks = () => {
  const tasks = [];
  taskList.querySelectorAll("li").forEach((li) => {
    tasks.push(li.querySelector("p").innerText);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const addTask = () => {
  const text = inputElememts.value.trim();
  if (text === "") {
    alert("Please enter a task");
    return;
  }
  addTaskToDOM(text);
  inputElememts.value = "";
  saveTasks();
};

const addTaskToDOM = (text) => {
  const li = document.createElement("li");
  li.className = "mb-2";

  li.innerHTML = `
    <p class="inline">${text}</p>
    <button class="ml-3 text-blue-600 edit-btn">✏️</button>
    <button class="ml-2 text-red-600 delete-btn">❌</button>
  `;

  // Delete functionality
  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
    saveTasks();
  });

  // Edit functionality
  li.querySelector(".edit-btn").addEventListener("click", () => {
    const newText = prompt("Edit task:", text);
    if (newText) {
      li.querySelector("p").innerText = newText.trim();
      saveTasks();
    }
  });

  taskList.appendChild(li);
};

taskBtn.addEventListener("click", addTask);
inputElememts.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
