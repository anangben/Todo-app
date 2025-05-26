//Selection of elements
const inputElememts = document.getElementById("taskInput");
const taskBtn = document.getElementById("taskButton");
const taskList = document.getElementById("taskList");

const addTask = () => {
  const text = inputElememts.value; //Get what was typed

  if (text === "") {
    alert("Please enter a text");
    return;
  }
  const LiElement = document.createElement("li"); //Create an li element
  LiElement.innerHTML = `<p class="inline">${text}</p> <button class="ml-4 text-red-600">❌</button>`;

  const deleteBtn = LiElement.querySelector("button");
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(LiElement);
  });

  taskList.appendChild(LiElement); //append the li elements  to the ul or task elements

  //assign the value of the text to the li
  //append the li elements  to the ul or task elements
  //Get a way to add it to the task list
  //Creat an li element
  //assign the value of the text to the li
};

taskBtn.addEventListener("click", addTask);
inputElememts.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    addTask();
  }
});
