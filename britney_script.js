// Reveal sections on scroll
const sections = document.querySelectorAll(".page-section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach(section => observer.observe(section));


// Navigation active state + smooth scroll
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    navLinks.forEach(a => a.classList.remove("active"));
    link.classList.add("active");

    const targetId = link.getAttribute("href").replace("#", "");
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


// Contact form submit
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Message sent!");
    contactForm.reset();
  });
}


// Social links
const socialLinks = {
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  github: "https://github.com"
};

Object.entries(socialLinks).forEach(([key, url]) => {
  // ❗ FIXED: selector must be a string
  const icon = document.querySelector(`.fa-${key}`);

  if (icon && icon.parentElement) {
    icon.parentElement.addEventListener("click", () => {
      window.open(url, "_blank");
    });
  }
});


// Read more modals
const readMoreButtons = document.querySelectorAll(".read-more");

readMoreButtons.forEach(button => {
  const modalId = button.getAttribute("data-modal");
  const modal = document.getElementById(modalId);

  if (!modal) return;

  const closeBtn = modal.querySelector(".close");

  button.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
