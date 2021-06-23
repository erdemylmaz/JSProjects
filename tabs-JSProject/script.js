const datas = [
  {
    name: "History",
    article: "this is history's article",
  },
  {
    name: "About",
    article: "this is about's article",
  },
  {
    name: "Contact",
    article: "this is contact's article",
  },
];

let titles = datas.map((data) => data.name);
const buttonsArea = document.querySelector(".btns");
const articleArea = document.querySelector(".article");

titles.map((title) => {
  let div = document.createElement("div");
  div.classList.add("btn");

  div.innerHTML = `${title}`;

  buttonsArea.appendChild(div);
});

const buttons = document.querySelectorAll(".btn");

articleArea.innerHTML = `<div class="article-text">${datas[0].article}</div>`;

showArticle = (e) => {
  let title = e.target.textContent;

  buttons.forEach((btn) => {
    btn.classList.contains("active") ? btn.classList.remove("active") : "";
  });

  e.target.classList.add("active");

  let data = datas.find((data) => data.name == title);

  articleArea.innerHTML = `<div class="article-text">${data.article}</div>`;
};

buttons[0].classList.add("active");

buttons.forEach((btn) => {
  btn.addEventListener("click", showArticle);
});
