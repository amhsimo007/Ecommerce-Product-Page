const hamburgerMenu = document.querySelector("#hamburger-menu");
const menu = document.querySelector("#menu");
const hamburgerIcon = document.querySelector("#icon-hamburger");
const iconClose = document.querySelector("#icon-close");
const container = document.querySelector("#container");
const mediaQuery = window.matchMedia("(max-width: 1023px)");


hamburgerIcon.addEventListener("click", function () {
    menu.style.flexDirection = "column";
    menu.style.gap = "15px";
    menu.style.position = "absolute";
    menu.style.zIndex = "1";
    menu.style.top = "0";
    menu.style.left = "0";
    menu.style.backgroundColor = "var(--color-White)";
    menu.style.width = "50%";
    menu.style.height = "100%";
    menu.style.padding = "5px 25px";
    menu.style.borderRight = "2px solid var(--color-pri-orange)";
    menu.style.borderBottom = "2px solid var(--color-pri-orange)";
    menu.style.borderRadius = "5px";
})

hamburgerIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("active");
    menu.classList.toggle("flex");
    iconClose.classList.toggle("active");
    container.classList.add("color-back");
})

iconClose.addEventListener("click", () => {
    iconClose.classList.toggle("active");
    menu.classList.toggle("flex");
    hamburgerIcon.classList.toggle("active");
    container.classList.remove("color-back");
})