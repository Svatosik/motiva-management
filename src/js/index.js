import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

// Hero swiper
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".hero-slider", {
    modules: [Autoplay],
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: "slide",
  });
});

// Mobile menu
const mobileMenu = document.querySelector(".js-menu-container");
const openMenuBtn = document.querySelector(".js-open-menu");
const closeMenuBtn = document.querySelector(".js-close-menu");

const toggleMenu = () => {
  const isMenuOpen =
    openMenuBtn.getAttribute("aria-expanded") === "true" || false;
  openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
  mobileMenu.classList.toggle("is-open");

  // Blokowanie lub odblokowanie przewijania strony
  if (!isMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

// Zamknięcie menu przy zmianie szerokości ekranu
window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
  if (!e.matches) return;
  mobileMenu.classList.remove("is-open");
  openMenuBtn.setAttribute("aria-expanded", false);
  document.body.style.overflow = "";
});

// Modal

const refs = {
  openModalBtn: document.querySelectorAll("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
};

refs.openModalBtn.forEach((button) => {
  button.addEventListener("click", toggleModal);
});
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
  refs.modal.classList.toggle("is-hidden");
}

// Accordion about
const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const content = this.nextElementSibling;

    // Close all sections
    document.querySelectorAll(".accordion-content").forEach((item) => {
      if (item !== content) {
        item.style.maxHeight = null;
      }
    });

    // Toggle the clicked section
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
