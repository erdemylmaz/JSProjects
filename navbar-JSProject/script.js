const navBtn = document.querySelector(".navbar-icon");
const menuItems = document.querySelectorAll(".r-menu-item");

function showNav() {
  menuItems.forEach((item) => {
    item.classList.contains("show-item")
      ? item.classList.remove("show-item")
      : item.classList.add("show-item");
  });

  navBtn.classList.contains("active")
    ? navBtn.classList.remove("active")
    : navBtn.classList.add("active");
}

navBtn.addEventListener("click", showNav);
