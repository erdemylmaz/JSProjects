const codes = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const changeBtn = document.querySelector(".change-btn");
const codeSpan = document.querySelector(".color-code");

function changeColor() {
  let code = "";

  for (let x = 0; x < 6; x++) {
    let randomNumber = Math.floor(Math.random() * codes.length);
    code += codes[randomNumber];
  }

  document.body.style.backgroundColor = `#${code}`;
  codeSpan.textContent = `#${code}`;
}

changeBtn.addEventListener("click", changeColor);
