const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
setInterval(getClock, 1000);
// 실행하고자 하는 function과 ms(milliseconds: 1000ms -> 1초)를 argument로 받는다.
