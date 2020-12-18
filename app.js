const burger = document.querySelector("#burger");
const close = document.querySelector("#close");
const nav = document.querySelector("#nav");

burger.addEventListener("click", showNav);

function showNav() {
     nav.className = "display";
     burger.style.display = "none";
     close.style.display = "block";
}
close.addEventListener("click", closeNav);

function closeNav() {
     nav.classList.remove("display");
     burger.style.display = "block";
     close.style.display = "none";
}