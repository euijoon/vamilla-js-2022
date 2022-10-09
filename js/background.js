const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //img 태그 생성 <img>
bgImage.src = `img/${chosenImage}`; // img 태그에 src 추가
document.body.appendChild(bgImage);// html에 입력 