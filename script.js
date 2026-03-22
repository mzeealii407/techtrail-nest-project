document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }

  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const isVisible = answer.style.display === "block";

      document.querySelectorAll(".faq-answer").forEach((item) => {
        item.style.display = "none";
      });

      answer.style.display = isVisible ? "none" : "block";
    });
  });

  const contactForm = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name && email && message) {
        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "green";
        contactForm.reset();
      } else {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
      }
    });
  }
});