const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const ToDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

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
  console.log(li);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}
toDoForm.addEventListener("submit", handleToDoSubmit);
