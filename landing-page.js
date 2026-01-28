const hero = document.getElementById("hero");

/* Tea ripple effect (already working) */
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

/* Notify Me interaction */
const notifyBtn = document.getElementById("notifyBtn");
const emailInput = document.getElementById("emailInput");
const notifyMessage = document.getElementById("notifyMessage");

notifyBtn.addEventListener("click", () => {
  if (emailInput.value.trim() === "") return;

  // Show message
  notifyMessage.classList.remove("hidden");

  // Clear input
  emailInput.value = "";

  // Optional: hide message again after 3 seconds
  setTimeout(() => {
    notifyMessage.classList.add("hidden");
  }, 3000);
});
