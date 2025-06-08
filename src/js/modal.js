const refs = {
  openModalBtn: document.querySelectorAll("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
};

function toggleModal() {
  refs.modal.classList.toggle("is-hidden");

  // Toggle body scroll
  if (refs.modal.classList.contains("is-hidden")) {
    // Modal is closing - enable scroll
    document.body.style.overflow = "";
  } else {
    // Modal is opening - disable scroll
    document.body.style.overflow = "hidden";
  }
}

refs.openModalBtn.forEach((button) => {
  button.addEventListener("click", toggleModal);
});

refs.closeModalBtn.addEventListener("click", toggleModal);

// Optional: Close modal on ESC key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !refs.modal.classList.contains("is-hidden")) {
    toggleModal();
  }
});

// Optional: Close modal on outside click
refs.modal.addEventListener("click", function (e) {
  if (e.target === refs.modal) {
    toggleModal();
  }
});
