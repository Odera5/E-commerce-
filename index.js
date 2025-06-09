document.addEventListener("DOMContentLoaded", () => {
  const hamburg = document.getElementById("hamburg");
  const mobileMenu = document.getElementById("mobile-menu");
  const body = document.body;

  hamburg.addEventListener("click", () => {
    hamburg.classList.toggle("open");
    mobileMenu.classList.toggle("active");
    body.classList.toggle("overflow-hiddden");
  });
});
