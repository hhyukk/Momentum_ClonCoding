const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  // padStart(2, 0)는 string의 길이를 2로 만드는데 string의 길이가 2가 아니라면 앞쪽에 0 채우는 함수이다
  // date.get으로 얻은 시간들은 number이기 때문에 String으로 변환해야 padStart()를 사용할 수 있다.
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
// 실행하고자 하는 function과 ms(milliseconds: 1000ms -> 1초)를 argument로 받는다.

