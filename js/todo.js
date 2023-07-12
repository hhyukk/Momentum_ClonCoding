const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const ToDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
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
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
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
  const newTodoObj = {
    // object 생성
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
  console.log("this is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
  // parsedToDos.forEach(sayHello);
  // parsedToDos가 가지고 있는 각각의 item에 대해 sayHello function을 실행
}
