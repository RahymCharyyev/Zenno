const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // const path = entry.target.querySelector(".path");
    // const path1 = entry.target.querySelector(".path1");
    // const path2 = entry.target.querySelector(".path2");
    const test1 = entry.target.querySelector(".test1");
    const test3 = entry.target.querySelector(".test3");

    if (entry.isIntersecting) {
      // path.classList.add("path-animation");
      // path1.classList.add("path1-animation");
      // path2.classList.add("path2-animation");
      test1.classList.add("test1-animation");
      test3.classList.add("test3-animation");
      return;
    }

    // path.classList.remove("path-animation");
    // path1.classList.remove("path1-animation");
    // path2.classList.remove("path2-animation");
    test1.classList.remove("test1-animation");
    test3.classList.remove("test3-animation");
  });
});

observer.observe(document.querySelector(".animated__logo"));
