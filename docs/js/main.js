const navMenu = document.querySelector(".nav-menu");
const burger = document.querySelector(".burger");

const menuOpen = () => {
    navMenu.classList.toggle("active"); 
    burger.classList.toggle("active"); 
}
burger.addEventListener('click', menuOpen);
