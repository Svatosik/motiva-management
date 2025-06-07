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
