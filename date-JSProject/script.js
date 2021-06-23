const datesArea = document.querySelector(".date-table");
const currentMonthDOM = document.querySelector(".current-month");

let d = new Date();

let monthsNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let month = d.getMonth();
// let month = 0;

let currentMonth = monthsNames[d.getMonth()];

let yearDays = [];

let months = [];

let count = 0;

for (let x = 1; x < 361; x++) {
  let day = x % 31;
  let id = x;

  yearDays.push({
    day: day,
    id: id,
  });

  if (x % 31 == 0 || x == 1) {
    let month = monthsNames[count];

    months[`${month}`] = {};
    months[`${month}`].days = [];
    months[`${month}`].ids = [];

    for (let x = 1; x < 31; x++) {
      months[`${month}`].days.push(x);
    }

    count++;
  }
}

for (let x = 0; x < monthsNames.length; x++) {
  let div = document.createElement("div");
  div.className = `date-month ${monthsNames[x]}`;

  div.innerHTML = `
         <div class="date-top">
						<div class="previous-month arrow"><i class="fas fa-arrow-left"></i></div>
						<div class="current-month">${monthsNames[x]}</div>
						<div class="next-month arrow"><i class="fas fa-arrow-right"></i></div>
					</div>

					<div class="date-days ${monthsNames[x]}-days">
					</div>
  `;

  datesArea.appendChild(div);
}

const prevArrow = document.querySelectorAll(".previous-month");
const nextArrow = document.querySelectorAll(".next-month");

const monthsDOM = document.querySelectorAll(".date-month");

function goToMonth(month) {
  for (let x = 0; x < monthsDOM.length; x++) {
    if (x < month) {
      monthsDOM[x].style.marginLeft = `-356px`;
    }
  }
}

function animateMonth(month) {
  let days = month.querySelectorAll(".date-month");
  month.style.animation = "flashAnimation 750ms ease-in-out";

  days.forEach((day) => {
    day.style.animation = "flashAnimation 750ms ease-in-out";
  });

  setTimeout(() => {
    month.style.animationName = "";

    days.forEach((day) => {
      day.style.animationName = "";
    });
  }, 750);
}

goToMonth(month);

prevMonth = () => {
  if (month > 0) {
    month--;
    currentMonth = monthsNames[month];

    monthsDOM[month].style.marginLeft = `0px`;
    animateMonth(monthsDOM[month]);
  } else {
    month = 11;
    currentMonth = monthsNames[month];

    monthsDOM[month].style.marginLeft = `0px`;

    for (let x = 0; x < monthsDOM.length; x++) {
      if (x != month) {
        monthsDOM[x].style.marginLeft = `-356px`;
      }
    }

    animateMonth(monthsDOM[month]);
  }
};

nextMonth = () => {
  if (month < 11) {
    month++;
    currentMonth = monthsNames[month];

    for (let x = 0; x < monthsDOM.length; x++) {
      if (x < month) {
        monthsDOM[x].style.marginLeft = `-356px`;
      }
    }

    animateMonth(monthsDOM[month]);
  } else {
    month = 0;
    currentMonth = monthsNames[month];

    for (let x = 0; x < monthsDOM.length; x++) {
      if (x != 0) {
        monthsDOM[x].style.marginLeft = `${356 * month}px`;
      }
      monthsDOM[0].style.marginLeft = "0px";
    }

    animateMonth(monthsDOM[month]);
  }
};

prevArrow.forEach((arrow) => {
  arrow.addEventListener("click", prevMonth);
});

nextArrow.forEach((arrow) => {
  arrow.addEventListener("click", nextMonth);
});

const allMonthsDOM = document.querySelectorAll(".date-month");

allMonthsDOM.forEach((mth) => {
  let daysArea = mth.querySelector(".date-days");

  for (let x = 1; x < 31; x++) {
    let div = document.createElement("div");
    div.className = "date-day";

    div.innerHTML = x;

    daysArea.appendChild(div);
  }
});

const dateDays = document.querySelectorAll(".date-day");
const dateTextArea = document.querySelector(".date-text");

for (let x = 0; x < yearDays.length; x++) {
  dateDays[x].setAttribute("data-value", yearDays[x].id);
}

let isFirstSelected = false;
let isSecondSelected = false;

let firstSelectedDay = "";
let secondSelectedDay = "";

let firstDaysValue = 0;
let secondDaysValue = 0;

let firstMonth = "";
let secondMonth = "";

let firstDay = 0;
let secondDay = 0;

let dayRange = 0;
let ticketsPrice = 0;

const resetBtn = document.querySelector(".reset-btn");

function resetTable() {
  isFirstSelected = false;
  isSecondSelected = false;

  firstSelectedDay = "";
  secondSelectedDay = "";

  firstDaysValue = 0;
  secondDaysValue = 0;

  firstMonth = "";
  secondMonth = "";

  firstDay = 0;
  secondDay = 0;

  dayRange = 0;
  ticketsPrice = 0;

  dateDays.forEach((day) => {
    day.classList.remove("selected-day");
    day.classList.remove("hovered-day");
  });

  dateTextArea.innerHTML = "0 Day <br> 0 TL <br> - ";
}

resetBtn.addEventListener("click", resetTable);

onClick = (e) => {
  let month =
    e.target.parentNode.parentNode.querySelector(".current-month").textContent;
  let day = e.target;
  let daysValue = parseInt(day.dataset.value);

  let dayNumber = day.textContent;

  if (isSecondSelected) {
    resetTable();
  }

  if (!isFirstSelected) {
    isFirstSelected = true;
    firstDaysValue = daysValue;
    firstSelectedDay = day;
    firstMonth = month;
    firstDay = dayNumber;

    day.style.borderTopLeftRadius = "4px";
    day.style.borderBottomLeftRadius = "4px";

    day.classList.add("selected-day");
  }

  if (!isSecondSelected && isFirstSelected && daysValue > firstDaysValue) {
    isSecondSelected = true;
    secondDaysValue = parseInt(daysValue);
    secondSelectedDay = day;
    secondMonth = month;
    secondDay = parseInt(dayNumber);

    day.style.borderTopRightRadius = "4px";
    day.style.borderBottomRightRadius = "4px";

    day.classList.add("selected-day");

    dayRange = secondDaysValue - firstDaysValue + 1;

    ticketsPrice = dayRange * 100;

    dateTextArea.innerHTML = `${dayRange} Day, <br class="">${ticketsPrice} TL</br> <span>${firstDay} ${firstMonth} - ${secondDay} ${secondMonth}`;

    if (dayRange >= 7) {
      var discountedTicketsPrice = (ticketsPrice * 70) / 100;

      dateTextArea.innerHTML = `${dayRange} Day <br> <span style="text-decoration: line-through; margin-left: 8px; margin-right: 8px; color: rgba(0, 0, 0, 0.6)">${ticketsPrice} TL</span> <span>${discountedTicketsPrice} TL</span> <br> <span>${firstDay} ${firstMonth} - ${secondDay} ${secondMonth}</span>`;
    }
  }
};

onHover = (e) => {
  let day = e.target;
  let daysValue = parseInt(day.dataset.value);
  let month =
    e.target.parentNode.parentNode.querySelector(".current-month").textContent;

  if (isFirstSelected && day != firstSelectedDay && !isSecondSelected) {
    let allDays = document.querySelectorAll(".date-day");

    allDays.forEach((d) => {
      let dValue = parseInt(d.dataset.value);

      if (firstDaysValue < dValue && dValue < daysValue) {
        d.classList.add("hovered-day");

        d.style.borderTopRightRadius = "0px";
        d.style.borderBottomRightRadius = "0px";
      } else {
        d.classList.remove("hovered-day");
      }

      if (dValue > daysValue && d != firstSelectedDay) {
        d.classList.remove("selected-day");

        d.style.borderTopRightRadius = "0px";
        d.style.borderBottomRightRadius = "0px";
      }
    });

    if (daysValue > firstDaysValue) {
      day.classList.add("selected-day");

      day.style.borderTopRightRadius = "4px";
      day.style.borderBottomRightRadius = "4px";

      dayRange = daysValue - firstDaysValue + 1;

      secondDay = parseInt(day.textContent);
      secondMonth = month;

      ticketsPrice = 100 * dayRange;

      dateTextArea.innerHTML = `${dayRange} Day, <br class="">${ticketsPrice} TL</br> <span>${firstDay} ${firstMonth} - ${secondDay} ${secondMonth}`;

      if (dayRange >= 7) {
        var discountedTicketsPrice = (ticketsPrice * 70) / 100;

        dateTextArea.innerHTML = `${dayRange} Day <br> <span style="text-decoration: line-through; margin-left: 8px; margin-right: 8px; color: rgba(0, 0, 0, 0.6)">${ticketsPrice} TL</span> <span>${discountedTicketsPrice} TL</span> <br> <span>${firstDay} ${firstMonth} - ${secondDay} ${secondMonth}</span>`;
      }
    }
  }
};

dateDays.forEach((day) => {
  day.addEventListener("click", onClick);
  day.addEventListener("mouseenter", onHover);
});

const container = document.querySelector(".tickets-area");
let containersWidth = container.getBoundingClientRect().width;

const dateTable = document.querySelector(".date-table");
let tablesWidth = dateTable.getBoundingClientRect().width;

let freeSpace = containersWidth - tablesWidth;

dateTable.style.marginLeft = `${freeSpace / 2}px`;
