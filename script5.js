// Smooth scroll to menu
function scrollToMenu() {
  document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
}

// Contact form message
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  document.getElementById("responseMsg").innerText = `Thank you, ${name}! We'll contact you soon.`;
  this.reset();
});

// Dark mode toggle
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});