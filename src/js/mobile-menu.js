// Mobile menu
const mobileMenu = document.querySelector(".js-menu-container");
const openMenuBtn = document.querySelector(".js-open-menu");
const closeMenuBtn = document.querySelector(".js-close-menu");

const toggleMenu = () => {
  const isMenuOpen =
    openMenuBtn.getAttribute("aria-expanded") === "true" || false;
  openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
  mobileMenu.classList.toggle("is-open");

  // Block or unblock page scrolling
  if (!isMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

// Close menu on screen resize
window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
  if (!e.matches) return;
  mobileMenu.classList.remove("is-open");
  openMenuBtn.setAttribute("aria-expanded", false);
  document.body.style.overflow = "";
});
