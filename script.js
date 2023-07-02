const x = document.querySelector(".x-icon");
const bars = document.querySelector(".bar-icon");
const menu = document.querySelector(".navbar");
const blabla = document.querySelectorAll(".bar-icon.active");
const overlay = document.querySelector(".overlay");

x.addEventListener("click", () => {
  x.classList.add("closed");
  bars.classList.remove("closed");
  menu.classList.add("closed");
  document.body.style.overflowY = "hidden";
  overlay.classList.remove("full");
});

bars.addEventListener("click", () => {
  x.classList.remove("closed");
  bars.classList.add("closed");
  menu.classList.remove("closed");
  document.body.style.overflowY = "static";
  overlay.classList.add("full");
});
