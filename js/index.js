const menu = document.querySelector(".menu");
const links = document.querySelector(".links");

menu.addEventListener("click", function () {
  links.classList.toggle("active");
});
