// Scroll Reveal Logic using Intersection Observer
const revealElements = document.querySelectorAll(
  ".home-data, .home-img, .section-title, .menu-card, .about-data, .about-img, .contact-data, .contact-form-wrapper"
);

const revealOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px",
};

const revealOnScroll = new IntersectionObserver(function (
  entries,
  revealOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("active");
      revealOnScroll.unobserve(entry.target);
    }
  });
},
revealOptions);

revealElements.forEach((el) => {
  el.classList.add("reveal");
  revealOnScroll.observe(el);
});

// Mobile Menu
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav-link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Parallax Effect on Mouse Move for Hero
document.addEventListener("mousemove", (e) => {
  const heroImg = document.querySelector(".home-img-wrapper img");
  if (heroImg) {
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;
    heroImg.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  }
});

/* =============== SMART HEADER =============== */
let lastScrollY = window.pageYOffset;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  const currentScrollY = window.pageYOffset;

  if (currentScrollY > lastScrollY && currentScrollY > 50) {
    // Scrolling DOWN -> Hide
    header.classList.add("scroll-down");
  } else {
    // Scrolling UP -> Show
    header.classList.remove("scroll-down");
  }

  lastScrollY = currentScrollY;
});
