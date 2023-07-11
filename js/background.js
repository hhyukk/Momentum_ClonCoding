const images = ["b.jpg", "c.jpg", "e.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImgage = document.createElement("img");
// creageElement로 html에 element를 생성

bgImgage.src = `img/${chosenImage}`;

document.body.appendChild(bgImgage);
// appendChild()는 body에 html을 추가
