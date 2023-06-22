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
