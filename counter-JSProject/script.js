const btns = document.querySelectorAll(".btn");
const countSpan = document.querySelector(".count");

let count = 0;

changeCount = (e) => {
  let type = e.target.dataset.type;

  if (type == "d") {
    count--;
  } else if (type == "i") {
    count++;
  } else if (type == "r") {
    count = 0;
  }

  if (count > 0) {
    countSpan.classList.add("increase");
  } else if (count < 0) {
    countSpan.classList.add("decrease");
  } else {
    countSpan.classList.remove("increase");
    countSpan.classList.remove("decrease");
  }

  countSpan.textContent = count;
};

btns.forEach((btn) => {
  btn.addEventListener("click", changeCount);
});
