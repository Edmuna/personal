const x = document.querySelector(".x-icon");
const bars = document.querySelector(".bar-icon");
const menu = document.querySelector(".navbar");
const blabla = document.querySelectorAll(".bar-icon.active");
const overlay = document.querySelector(".overlay");
const contactForm = document.querySelector(".contact");

x.addEventListener("click", () => {
  x.classList.add("closed");
  bars.classList.remove("closed");
  menu.classList.add("closed");
  overlay.classList.remove("full");
  contactForm.classList.remove("not-visible");
});

bars.addEventListener("click", () => {
  x.classList.remove("closed");
  bars.classList.add("closed");
  menu.classList.remove("closed");
  overlay.classList.add("full");
  contactForm.classList.add("not-visible");
});
