const menu = document.querySelector(".menu");
const links = document.querySelector(".links");
const header = document.querySelector("header");

menu.addEventListener("click", function () {
  links.classList.toggle("active");
});

var modal = document.getElementById("modal");

var modalClose = document.getElementById("modal-close");
modalClose.addEventListener("click", function () {
  modal.style.display = "none";
});

document.addEventListener("click", function (e) {
  if (e.target.className.indexOf("modal-target") !== -1) {
    var img = e.target;
    var modalImg = document.getElementById("modal-content");
    modal.style.display = "block";
    modalImg.src = img.src;
  }
});

window.onclick = (e) => {
  if (e.target.className == "modal") {
    modal.style.display = "none";
  }
};
