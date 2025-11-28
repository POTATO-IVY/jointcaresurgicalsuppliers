// app.js for Jointcare Surgical Supplier site

document.addEventListener("DOMContentLoaded", () => {
  // 1. Dynamic year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Mobile navbar toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("open");
      navLinks.classList.toggle("open");
    });

    // Optional: close nav when clicking a link (on mobile)
    navLinks.addEventListener("click", (e) => {
      if (e.target.tagName.toLowerCase() === "a") {
        navToggle.classList.remove("open");
        navLinks.classList.remove("open");
      }
    });
  }

  // 3. Simple product filter
  const filterButtons = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".instrument-card");

  if (filterButtons.length && productCards.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");

        // active state
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        // filter cards
        productCards.forEach((card) => {
          const category = card.getAttribute("data-category");
          if (filter === "all" || category === filter) {
            card.style.display = "flex";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  // 4. Contact form basic handler (no backend yet)
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault(); // stop page reload

      // Simple UX feedback
      alert("Thank you! Your message has been noted. (Demo only – connect to backend later.)");

      // Reset form
      contactForm.reset();
    });
  }
});