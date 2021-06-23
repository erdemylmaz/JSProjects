const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const toggleBtn = document.querySelector(".toggle");

const video = document.querySelector(".video");

function startVideo() {
  toggleBtn.classList.remove("slideToLeft");
  toggleBtn.classList.add("slideToRight");

  video.play();
}

function pauseVideo() {
  toggleBtn.classList.remove("slideToRight");
  toggleBtn.classList.add("slideToLeft");

  video.pause();
}

startBtn.addEventListener("click", startVideo);
pauseBtn.addEventListener("click", pauseVideo);
