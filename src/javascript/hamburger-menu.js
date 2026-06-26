const hamburgerMenu = document.querySelector("#hamburger-menu");
const menu = document.querySelector("#menu");
const hamburgerIcon = document.querySelector("#hamburger-icon");
const iconClose = document.querySelector("#icon-close");

hamburgerIcon.addEventListener("click", function () {
    hamburgerIcon.style.display = "none";
    menu.style.display = "flex";
    menu.style.display = "flex";
    menu.style.flexDirection = "column";
    menu.style.gap = "15px";
    iconClose.style.display = "block";
    iconClose.style.marginBottom = "25px";
    iconClose.style.width = "6%";
    menu.style.position = "absolute";
    menu.style.zIndex = "1";
    menu.style.top = "0";
    menu.style.left = "0";
    menu.style.backgroundColor = "white";
    menu.style.width = "290px";
    menu.style.height = "100%";
    menu.style.padding = "40px 25px";
})

iconClose.addEventListener("click", function () {
    hamburgerIcon.style.display = "block";
    menu.style.display = "none";
    iconClose.style.display = "none";
})