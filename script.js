// Mobile menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");
    menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.textContent = "☰";
      menuToggle.setAttribute("aria-label", "Abrir menu");
    });
  });
}

// Header shadow on scroll
const header = document.querySelector(".site-header");

function updateHeader() {
  if (!header) return;

  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", updateHeader);
updateHeader();

// FAQ accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  if (!question) return;

  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    faqItems.forEach((faq) => faq.classList.remove("active"));

    if (!isActive) {
      item.classList.add("active");
    }
  });
});

// Footer year
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Close menu when clicking outside
document.addEventListener("click", (event) => {
  if (!navLinks || !menuToggle) return;

  const clickedInsideMenu = navLinks.contains(event.target);
  const clickedToggle = menuToggle.contains(event.target);

  if (!clickedInsideMenu && !clickedToggle) {
    navLinks.classList.remove("active");
    menuToggle.textContent = "☰";
  }
});