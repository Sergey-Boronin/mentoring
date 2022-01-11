const toDoList = document.querySelector(".todo-list");
const input = document.querySelector(".todo-input");
const form = document.querySelector('form')

const tasks = ["Задача1", "Задача2", "Задача3"];

function handleClickAdd() {
  tasks.push(input.value);
  console.log(tasks);
  input.value = "";
  render();
}

function handleCkickRemove(e) {
  const currentId = e.target.closest(".task").id;
  tasks.splice(currentId, 1);
  render();
}

function clearTodoList() {
  while (toDoList.firstChild) {
    toDoList.removeChild(toDoList.firstChild);
  }
}

function createTask(task, id) {
  const taskTemplate = document.querySelector(".task-template").content;
  const element = taskTemplate.cloneNode(true);
  const elementItem = element.querySelector("li");
  const elementText = element.querySelector("span");
  elementItem.id = id;
  elementText.textContent = task;
  const elementDelete = element.querySelector(".delete-task");
  elementDelete.addEventListener("click", (e) => {
    handleCkickRemove(e);
  });
  toDoList.appendChild(element);
}

function render() {
  clearTodoList();
  tasks.forEach((item, index) => {
    createTask(item, index);
  });
}

render();

form.addEventListener("submit", (e) => {
  e.preventDefault()
  handleClickAdd();
});
