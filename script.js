/* ===== PARALLAX HERO ===== */

const hero = document.querySelector(".hero");

if (hero) {
  hero.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
  });
}


/* ===== NAVBAR BACKGROUND CHANGE ===== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


/* ===== ACTIVE NAV LINK ===== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


//* ===== AAA SCROLL REVEAL ===== */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }

  });
}, {
  threshold: 0.18
});

revealElements.forEach(el => observer.observe(el));


/* ===== MOBILE BLOCK ===== */

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
  const block = document.getElementById("mobile-block");

  if (block) {
    block.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}
