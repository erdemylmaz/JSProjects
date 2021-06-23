const openModalBtn = document.querySelector(".open-modal-btn");
const closeModalBtn = document.querySelector(".close-modal-btn");
const modal = document.querySelector(".modal");

function openModal() {
  modal.classList.add("show-modal");
}

function closeModal() {
  modal.classList.remove("show-modal");
}

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
