const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const animated__logo = entry.target.querySelector(".animated__logo");
    const path1 = entry.target.querySelector(".path1");
    const path2 = entry.target.querySelector(".path2");

    if (entry.isIntersecting) {
      path1.classList.add("path1-animation");
      path2.classList.add("path2-animation");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class and restore opacity!
    path1.classList.remove("path1-animation");
    path2.classList.remove("path2-animation");
  });
});

observer.observe(document.querySelector(".animated__logo"));
