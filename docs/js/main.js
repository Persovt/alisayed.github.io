const navMenu = document.querySelector(".nav-menu");
const burger = document.querySelector(".burger");
const body     = document.querySelector("body")
const menuOpen = () => {
    
    if(navMenu.classList.contains('active') && !burger.classList.contains('active-burger'))
        burger.classList.toggle("active-burger"); 

    navMenu.classList.toggle("active"); 
    burger.classList.toggle("active-burger"); 
    body.classList.toggle('is-scroll');
}
burger.addEventListener('click', menuOpen);
