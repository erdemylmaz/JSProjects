const dayCountDOM = document.querySelector(".day-count");
const hourCountDOM = document.querySelector(".hour-count");
const minuteCountDOM = document.querySelector(".minute-count");
const secondCountDOM = document.querySelector(".second-count");

const dayTextDOM = document.querySelector(".day-text");
const hourTextDOM = document.querySelector(".hour-text");
const minuteTextDOM = document.querySelector(".minute-text");
const secondTextDOM = document.querySelector(".second-text");

// 6th month is 5 (0 indexed)
let futureDate = new Date(2021, 5, 24, 9);
let futureTime = futureDate.getTime();

let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;

addZero = (x) => {
  return x < 10 ? "0" + x : x;
};

setInterval(() => {
  let date = new Date();
  let t = futureTime - date.getTime();

  let days = Math.floor(t / day);
  let hours = Math.floor((t % day) / hour);
  let minutes = Math.floor((t % hour) / minute);
  let seconds = Math.floor((t % minute) / second);

  dayCountDOM.textContent = addZero(days);
  hourCountDOM.textContent = addZero(hours);
  minuteCountDOM.textContent = addZero(minutes);
  secondCountDOM.textContent = addZero(seconds);

  dayTextDOM.textContent = `${days > 1 ? "Days" : "Day"}`;
  hourTextDOM.textContent = `${hours > 1 ? "Hours" : "Hour"}`;
  minuteTextDOM.textContent = `${minutes > 1 ? "Minutes" : "Minute"}`;
  secondTextDOM.textContent = `${seconds > 1 ? "Seconds" : "Second"}`;
}, 1000);
