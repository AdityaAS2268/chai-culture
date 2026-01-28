document.addEventListener("DOMContentLoaded", () => {

  /* ================= HERO RIPPLE EFFECT ================= */

  const hero = document.getElementById("hero");

  if (hero) {
    let ticking = false;

    hero.addEventListener("mousemove", (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = hero.getBoundingClientRect();

          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;

          hero.style.setProperty("--x", `${x}%`);
          hero.style.setProperty("--y", `${y}%`);
          hero.style.setProperty("--rx", `${x - 2}%`);
          hero.style.setProperty("--ry", `${y + 2}%`);

          ticking = false;
        });

        ticking = true;
      }
    });
  }

  /* ================= NOTIFY INTERACTION ================= */

  const notifyBtn = document.getElementById("notifyBtn");
  const emailInput = document.getElementById("emailInput");
  const notifyMessage = document.getElementById("notifyMessage");

  if (notifyBtn && emailInput && notifyMessage) {
    notifyBtn.addEventListener("click", () => {
      const email = emailInput.value.trim();

      if (email === "") return;

      // Clear input text
      emailInput.value = "";

      // Optional UX polish
      emailInput.blur();

      // Show notified message
      notifyMessage.classList.remove("hidden");

      // Hide message after 3 seconds
      setTimeout(() => {
        notifyMessage.classList.add("hidden");
      }, 3000);
    });
  }

});
