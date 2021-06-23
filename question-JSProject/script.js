const dataQuestions = [
  {
    title: "How can i learn programming?",
    article:
      "<span class='first-word'>You</span> can learn programming easily, you just need a computer and internet connection, if you has these things you can learn programming from youtube etc.",
    category: "faq",
  },
  {
    title: "How you learned the programming?",
    article:
      "I learned programming from youtube courses, espacially 'Coding Addict' channel",
    category: "faq",
  },
  {
    title: "I'm 24, am i too late for learn programming?",
    article: "No, you aren't",
    category: "faq",
  },
  {
    title: "Are you single?",
    article: "Yes, i'm.",
  },
  {
    title: "Does i have siblings?",
    article: "Yes, i have 1 sibling.",
  },
];

// init questions
const faqQuestionsArea = document.querySelector(".faq-questions");
const questionsArea = document.querySelector(".all-questions");

let dataFaqQuestions = dataQuestions.filter((question) => {
  return question.category == "faq";
});

let nonFaqQuestions = dataQuestions.filter((question) => {
  return question.category != "faq";
});

dataFaqQuestions.map((question) => {
  let div = document.createElement("div");
  div.classList.add("question");
  div.classList.add("question-child");

  div.innerHTML = `
    <div class="question-header question-child">
      <div class="question-name question-child">${question.title}</div>
      <div class="show-question question-child">+</div>
    </div>

    <div class="question-article question-child">
      <h4 class="question-answer question-child">${question.article}</h4>
    </div>
    `;

  faqQuestionsArea.appendChild(div);
});

nonFaqQuestions.map((question) => {
  let div = document.createElement("div");
  div.classList.add("question");
  div.classList.add("question-child");

  div.innerHTML = `
    <div class="question-header question-child">
      <div class="question-name question-child">${question.title}</div>
      <div class="show-question question-child">+</div>
    </div>

    <div class="question-article question-child">
      <h4 class="question-answer question-child">${question.article}</h4>
    </div>
    `;

  questionsArea.appendChild(div);
});

const questions = document.querySelectorAll(".question");
const showBtns = document.querySelectorAll(".show-question");

showAnswer = (e) => {
  // reset all
  questions.forEach((question) => {
    let questionName = question.querySelector(".question-name").textContent;
    let currentQuestionName =
      e.target.parentNode.parentNode.firstElementChild.firstElementChild
        .textContent;

    if (questionName != currentQuestionName) {
      let article = question.querySelector(".question-article");
      let btn = question.querySelector(".show-question");

      let isActive = article.classList.contains("show-answer");

      if (isActive) {
        article.classList.remove("show-answer");
        btn.textContent = "+";
        btn.classList.remove("clicked");
      }
    }
  });

  let question = e.target.parentNode.parentNode;

  let btn = e.target;
  let article = question.querySelector(".question-article");

  article.classList.contains("show-answer")
    ? article.classList.remove("show-answer")
    : article.classList.add("show-answer");

  if (btn.classList.contains("clicked")) {
    btn.classList.remove("clicked");
    btn.textContent = "+";
  } else {
    btn.classList.add("clicked");
    btn.textContent = "-";
  }
};

showBtns.forEach((btn) => {
  btn.addEventListener("click", showAnswer);
});

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("question-child")) {
    questions.forEach((question) => {
      let article = question.querySelector(".question-article");
      let btn = question.querySelector(".show-question");

      let isActive = article.classList.contains("show-answer");

      if (isActive) {
        article.classList.remove("show-answer");
        btn.textContent = "+";
        btn.classList.remove("clicked");
      }
    });
  }
});

const header = document.querySelector(".header");
const container = document.querySelector(".container");

const btns = document.querySelectorAll(".menu-item");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let id = e.target.id;
    let element = document.querySelector(`.${id}-questions`);

    let elementsPosition = element.offsetTop;

    let currentPosition = window.pageYOffset;

    console.log(elementsPosition, currentPosition);

    container.style.marginTop = "8px";

    window.scrollTo({
      left: 0,
      top: elementsPosition,
    });
  });
});

const bttButton = document.querySelector(".back-to-top");

onScroll = (e) => {
  let currentPosition = window.pageYOffset;
  let headerHeight = header.getBoundingClientRect().height;

  if (currentPosition + 8 >= headerHeight) {
    header.classList.add("fixed-header");
    bttButton.style.visibility = "visible";
  } else {
    header.classList.remove("fixed-header");
    bttButton.style.visibility = "hidden";
  }
};

document.addEventListener("scroll", onScroll);

bttButton.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
  });
});

// deneme
// let products = [
//   {
//     name: "Television",
//     category: "technology",
//   },
//   {
//     name: "Telephone",
//     category: "technology",
//   },
//   {
//     name: "Book",
//     category: "reading",
//   },
//   {
//     name: "Ball",
//     category: "sport",
//   },
//   {
//     name: "sport-tshirt",
//     category: "sport",
//   },
//   {
//     name: "Lamp",
//     category: "decoration",
//   },
// ];

// const categories = [...new Set(products.map((product) => product.category))];
// const buttonsArea = document.querySelector(".buttons");

// buttonsArea.innerHTML = `${categories
//   .map((category) => {
//     return `<div class="btn"><h2>${category}</h2></div>`;
//   })
//   .join("")}`;

// const buttons = document.querySelectorAll(".btn");

// buttons.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     let category = e.target.textContent;

//     let selectedProducts = products.filter((product) => {
//       return product.category == category;
//     });

//     selectedProducts.map((product) => {
//       console.log(product.name, product.category);
//     });
//   });
// });
