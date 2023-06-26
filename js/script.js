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

function underlineTitle(id) {
  // Удаляем класс active-title у всех заголовков
  var titles = document
    .getElementsByClassName("services__container-titles")[0]
    .getElementsByTagName("h3");
  for (var i = 0; i < titles.length; i++) {
    titles[i].classList.remove("active-title");
  }

  // Добавляем класс active-title к выбранному заголовку
  var selectedTitle = document.getElementById("title" + id);
  selectedTitle.classList.add("active-title");

  // Вызываем функцию showDescription с тем же аргументом id
  showDescription(id);
}

document.addEventListener("DOMContentLoaded", function () {
  // Добавляем класс active-title к заголовку при инициализации страницы
  var initialTitle = document.getElementById("title1");
  initialTitle.classList.add("active-title");
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
