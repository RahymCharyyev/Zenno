let navLinks;
let burgerIcon = document.querySelector("#menu");
let titles = document.querySelector(".services__mobile-title");

document.addEventListener("DOMContentLoaded", function () {
  navLinks = document.querySelector(".nav-links");

  function toggleMenu() {
    navLinks.classList.toggle("show");
    burgerIcon.classList.toggle("open");
    titles.classList.toggle("hide");
  }

  burgerIcon.addEventListener("click", toggleMenu);

  const navLinksList = document.querySelectorAll(".nav-links a");
  navLinksList.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      closeMenu();
      setTimeout(function () {
        window.location = link.href;
      }, 800);
    });
  });
});

function closeMenu() {
  navLinks.classList.remove("show");
  burgerIcon.classList.remove("open");
  titles.classList.remove("hide");
}
