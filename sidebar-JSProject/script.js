const sidebarIcons = document.querySelectorAll(".sidebarIcon");
const sidebar = document.querySelector(".sidebar");

function toggleSidebar() {
  return sidebar.classList.contains("show-sidebar")
    ? sidebar.classList.remove("show-sidebar")
    : sidebar.classList.add("show-sidebar");
}

sidebarIcons.forEach((icon) => {
  icon.addEventListener("click", toggleSidebar);
});
