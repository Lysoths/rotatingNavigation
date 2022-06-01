const navbar = document.querySelector(".nav-bar");
const container = document.querySelector(".container");
const fax = document.querySelector(".fa-x");
const fabar = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");



fabar.addEventListener("click",()=>{
        container.style="transform: rotate(-20deg) translateY(-280px) translateX(180px);"
        navbar.style="transform: rotate(180deg);" 
        menu.style="transform:translateX(10px);"   
})


fax.addEventListener("click",()=>{
    container.style="transform: rotate(0) translateY(0) translateX(0);"
    navbar.style="transform: rotate(0);" 
    menu.style="transform:translateX(-300px);"   
})
