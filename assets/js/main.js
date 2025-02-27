AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

//TYPING TEXT
document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".typed", {
    strings: ["UI Developer", "Graphic Designer"],
    typeSpeed: 90, // Typing speed in milliseconds
    backSpeed: 70, // Backspacing speed
    backDelay: 1000, // Delay before starting to erase
    loop: true, // Loop infinitely
  });
});
//TYPING TEXT

//TYPING TEXT: NICKNAME
document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".nickname", {
    strings: ["jun", "ton"],
    typeSpeed: 90, // Typing speed in milliseconds
    backSpeed: 70, // Backspacing speed
    backDelay: 1000, // Delay before starting to erase
    loop: true, // Loop infinitely
  });
});
//TYPING TEXT

//SKILL BAR
document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".progress-bar");

  progressBars.forEach((bar) => {
    const width = bar.getAttribute("data-width");
    bar.style.width = width;
  });
});
//SKILL BAR

//TESTIMONIALS
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".testimonials-swiper", {
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
    },
  });
});
//TESTIMONIALS

function toggleImageVisibility() {
  const img = document.querySelector(".responsive-image");
  const width = window.innerWidth;

  if (width >= 768 && width <= 991) {
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
}

window.addEventListener("resize", toggleImageVisibility);
window.addEventListener("load", toggleImageVisibility);

// IMAGE 3D EFFECT: HOMEPAGE
document.addEventListener("DOMContentLoaded", () => {
  const profileImg = document.getElementById("profile-img");

  profileImg.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    profileImg.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

  profileImg.addEventListener("mouseleave", () => {
    profileImg.style.transform = "rotateY(0deg) rotateX(0deg)";
  });
});
// IMAGE 3D EFFECT: HOMEPAGE
