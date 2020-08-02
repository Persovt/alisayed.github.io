const navMenu = document.querySelector(".nav-menu");
const burger = document.querySelector(".burger");

const menuOpen = () => {
    navMenu.classList.toggle("active"); 
}
burger.addEventListener('click', menuOpen);
    if(navMenu.classList.contains('active') == true)
        {
        document.addEventListener('click', () => {
        if (navMenu.contains(event.target))  navMenu.classList.remove("active"); 
        })
}
