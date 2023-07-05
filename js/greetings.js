const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault(); // preventDefault는 어떤 event의 기본 행동이 발생되지 않도록 막는 것
  console.log(loginInput.value);
  // const username = loginInput.value;
  // console.log(username);
}
function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}
loginForm.addEventListener("submit", onLoginSubmit);
// JS는 onLoginSubmit함수 호출시 인자를 담아서 호출함. 해당 인자는 event object를 담은 정보들
link.addEventListener("click", handleLinkClick);