const foods = [];

const buttonsDOM = document.querySelector(".buttons");
const rangeInput = document.querySelector(".range-input");
const categories = ["dinner", "lunch", "breakfast", "all"];

// set foods randomly
for (let x = 0; x < 250; x++) {
  let randomPrice = Math.floor(1 + Math.random() * 50);
  let randomCategory =
    categories[Math.floor(Math.random() * (categories.length - 1))];
  let count = x + 1;

  foods.push({
    name: `Food ${count}`,
    price: randomPrice,
    category: randomCategory,
    information: `this is food ${count}`,
    count: count,
  });
}

// init category buttons
categories.map((ctg) => {
  let div = document.createElement("div");
  div.classList.add("button");

  div.innerHTML = `${ctg}`;

  buttonsDOM.prepend(div);
});

// init foods
const foodsDOM = document.querySelector(".menu");

function initFoods() {
  let value = rangeInput.value;
  foods.map((food) => {
    if (food.price <= value) {
      let div = document.createElement("div");
      div.classList.add("food");
      div.dataset.category = `${food.category}`;

      div.innerHTML = `
        <div class="food-img ${food.category}">${food.category}</div>

        <div class="food-article">
            <div class="food-name"><div class="foods-name">${food.name}</div> $<span class="food-price">${food.price}</span></div>
            <div class="food-line"></div>
            <div class="food-information">${food.information}</div>
        </div>
      `;

      foodsDOM.appendChild(div);
    }
  });
}

initFoods();

// category buttons
showItem = (ctg) => {
  let foods = document.querySelectorAll(".food");
  let rangeValue = parseInt(rangeInput.value);

  foods.forEach((food) => {
    let foodsCategory = food.dataset.category;
    let foodsPrice = parseInt(food.querySelector(".food-price").textContent);

    if (foodsCategory == ctg && foodsPrice <= rangeValue) {
      food.style.display = "flex";
    } else if (foodsCategory != ctg) {
      food.style.display = "none";
    }

    if (ctg == "all" && foodsPrice <= rangeValue) {
      food.style.display = "flex";
    }
  });
};

const buttons = document.querySelectorAll(".button");

buttons[0].classList.add("active");

let category = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // set active
    buttons.forEach((btn) => {
      btn.classList.contains("active") ? btn.classList.remove("active") : "";
    });

    e.target.classList.add("active");

    category = e.target.textContent.toLowerCase();

    showItem(category);
    initFoods();
  });
});

// back to top button
const bttButton = document.querySelector(".back-to-top");
const menu = document.querySelector(".menu");

bttButton.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
  });
});

window.addEventListener("scroll", (e) => {
  let currentPosition = pageYOffset;
  let menusPosition = menu.offsetTop;

  if (currentPosition >= menusPosition) {
    bttButton.style.visibility = "visible";
  } else {
    bttButton.style.visibility = "hidden";
  }
});

// range
const rangePriceDOM = document.querySelector(".range-price");

rangeInput.addEventListener("input", () => {
  let value = parseInt(rangeInput.value);
  let ctg = document.querySelector(".active").textContent;

  let foods = document.querySelectorAll(".food");

  rangePriceDOM.textContent = `$${value}`;

  foods.forEach((food) => {
    let foodsPrice = food.querySelector(".food-price").textContent;

    let foodsCategory = food
      .querySelector(".food-img")
      .textContent.toLowerCase();

    if (foodsPrice <= value && ctg == foodsCategory) {
      food.style.display = "flex";
    } else if (ctg == "all" && foodsPrice <= value) {
      food.style.display = "flex";
    } else {
      food.style.display = "none";
    }
  });
});

// sort by
const sortButtons = document.querySelectorAll(".sort-btn");

sortBy = (e) => {
  let sortType = e.target.dataset.type;
  let priceValue = rangeInput.value;

  sortButtons.forEach((btn) => {
    if (btn.classList.contains("sort-active")) {
      btn.classList.remove("sort-active");
    }
  });

  e.target.classList.add("sort-active");

  foodsDOM.innerHTML = "";

  if (sortType == "htl") {
    foods.sort((a, b) => b.price - a.price);
  } else if (sortType == "lth") {
    foods.sort((a, b) => a.price - b.price);
  } else if (sortType == "none") {
    foods.sort((a, b) => a.count - b.count);
  }

  initFoods();
  if (category != "") {
    showItem(category);
  }
};

sortButtons.forEach((btn) => {
  btn.addEventListener("click", sortBy);
});

// set theme
let d = new Date();

let h = d.getHours();

if (h >= 18) {
  document.body.classList.add("dark");
} else if (h <= 7) {
  document.body.classList.add("dark");
} else {
  document.body.classList.remove("dark");
}

let myArray = [123, 2, 32, 412, 12, 129];

let sortedArray = myArray.sort((a, b) => {
  return b - a;
});
