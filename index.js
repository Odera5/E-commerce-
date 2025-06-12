document.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const mobileMenu = document.getElementById("mobile-menu");
  const body = document.body;

  hamburgerIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("open");
    mobileMenu.classList.toggle("active");
    body.classList.toggle("overflow-hidden");
  });
});
