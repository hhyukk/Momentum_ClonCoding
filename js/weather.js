const API_KEY = "a83d87055735dac8fb3d81d4f56b969a";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
  // fecth는 promise다.
  // promise는 당장 일어나지 않고 시간이 좀 걸린 뒤에 일어나는 것을 말한다. 따라서 then을 사용해야 한다.
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
