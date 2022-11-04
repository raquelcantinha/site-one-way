let menuContainer = document.querySelector("nav");
const btnShowMenu = document.getElementById("btn-menu");
const btnHideMenu = document.getElementById("btn-close-menu");
btnShowMenu.addEventListener('click', () => {
    menuContainer.style.width = "65vw";
    btnShowMenu.style.display = "none";
    btnHideMenu.style.display = "block";
})
btnHideMenu.addEventListener('click', () => {
    menuContainer.style.width = "0";
    btnShowMenu.style.display = "block";
    btnHideMenu.style.display = "none";
}
)
