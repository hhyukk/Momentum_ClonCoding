const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const ToDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
  // JSON.stringify는 JS object든, array든 어떤것이든 string으로 바꿔줌
}
function deleteToDo(event) {
  const li = event.target.parentElement;
  // target은 클릭된 HTML element이다.
  // parentElement는 클릭된 element의 부모이다.
  // 삭제하고 싶은 list가 저장
  li.remove();
  // list 제거
}
function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);
