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
