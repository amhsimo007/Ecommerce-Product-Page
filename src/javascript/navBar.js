// Navbar
const hamburgerMenu = document.querySelector("#hamburger-menu");
const menu = document.querySelector("#menu");
const hamburgerIcon = document.querySelector("#icon-hamburger");
const iconClose = document.querySelector("#icon-close");
const header = document.querySelector("#header");

hamburgerIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("active");
    menu.classList.toggle("flex");
    iconClose.classList.toggle("active");
    header.classList.add("color-back");
    menu.classList.add("style-mobile-menu");
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
})

iconClose.addEventListener("click", () => {
    iconClose.classList.toggle("active");
    menu.classList.toggle("flex");
    hamburgerIcon.classList.toggle("active");
    header.classList.remove("color-back");
    menu.classList.remove("style-mobile-menu");
    navbar.style.backgroundColor = "var(--Light-grayish-blue)";
})