function showDescription(descriptionNumber) {
  let descriptions = document.getElementsByClassName(
    "services__container-description"
  );
  for (let i = 0; i < descriptions.length; i++) {
    descriptions[i].style.display = "none";
  }

  let selectedDescription = document.getElementById(
    "description" + descriptionNumber
  );
  if (selectedDescription) {
    selectedDescription.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let title1 = document.getElementById("title1");
  title1.classList.add("selected");
  let titles = document.querySelectorAll(".services__container-titles h3");
  titles.forEach(function (title) {
    title.addEventListener("click", function () {
      titles.forEach(function (title) {
        title.classList.remove("selected");
      });
      this.classList.add("selected");
    });
  });
});

function getCurrentYear() {
  let date = new Date();
  return date.getFullYear();
}

function updateFooterText() {
  let footer = document.getElementById("change__year");
  let currentYear = getCurrentYear();
  footer.innerHTML = "© Zenno LLC, " + currentYear;
}

window.onload = updateFooterText;
