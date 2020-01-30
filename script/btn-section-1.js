function openMenuSection1() {
    document.querySelector(".section-1__main-menu").style.display = "block";
    document.querySelector(".main-nav__btn-close").style.display = "block";
    document.querySelector(".section-1__main-nav").style.display = "none";
}

function closeMenuSection1() {
    document.querySelector(".section-1__main-menu").style.display = "none";
    document.querySelector(".main-nav__btn-close").style.display = "none";
    document.querySelector(".section-1__main-nav").style.display = "flex";
}