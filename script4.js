// Toggle navbar on small screens-toggl
const menuToggle = document.getElementById("humburger");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
