document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Navigation Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");

  if (menuToggle && mobileMenu && menuIcon) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      if (mobileMenu.classList.contains("hidden")) {
        menuIcon.className = "fa-solid fa-bars text-xl";
      } else {
        menuIcon.className = "fa-solid fa-xmark text-xl";
      }
    });

    document.querySelectorAll(".mobile-link").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        menuIcon.className = "fa-solid fa-bars text-xl";
      });
    });
  }

  // 2. Direct WhatsApp Form Dispatcher
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("form-name")
        ? document.getElementById("form-name").value.trim()
        : "";
      const taskType = document.getElementById("form-task-type")
        ? document.getElementById("form-task-type").value
        : "Diskusi Proyek";
      const message = document.getElementById("form-message")
        ? document.getElementById("form-message").value.trim()
        : "";

      if (!message) {
        alert("Silakan isi detail pesan terlebih dahulu.");
        return;
      }

      // Format teks untuk WhatsApp
      const rawText = `Halo David, Saya *${name}*\n*Kebutuhan:* ${taskType}\n\n*Detail Pesan:*\n${message}`;
      const textMessage = encodeURIComponent(rawText);

      // Tautan WhatsApp tujuan
      const waUrl = `https://wa.me/6285723780454?text=${textMessage}`;

      // Buka tautan di tab baru
      window.open(waUrl, "_blank");
    });
  }
});
