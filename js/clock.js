const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hello");
}

setInterval(sayHello, 5000);
// 실행하고자 하는 function과 ms(milliseconds: 1000ms -> 1초)를 argument로 받는다.
