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
