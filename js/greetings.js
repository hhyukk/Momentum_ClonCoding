const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  const username = loginInput.ariaValueMax;
  if (username === "") {
    alert("please write your name");
  } else if (username.length > 15) {
    //username이 15자 이상이면 경고창을 보여줌
    alert("Your name is too long.");
  }
}

loginButton.addEventListener("click", onLoginBtnClick);