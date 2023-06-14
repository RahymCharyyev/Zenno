gsap.registerPlugin(ScrollTrigger);
let sections = gsap.utils.toArray(".zenno__slider-slide");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".zenno__slider-wrapper",
    pin: ".zenno",
    pinSpacing: true,
    scrub: 4,
    end: "+=1000",
  },
});
