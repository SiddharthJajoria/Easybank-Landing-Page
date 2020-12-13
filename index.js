const ham=document.querySelector(".hamburger");
const menu1=document.querySelector(".line-1");
const menu2=document.querySelector(".line-2");
const menu3=document.querySelector(".line-3");
const navBar=document.querySelector(".nav");
ham.addEventListener("click",function(){
    menu1.classList.toggle("clicked-1");
    menu2.classList.toggle("clicked-2");
    menu3.classList.toggle("clicked-3");
    navBar.classList.toggle("clicked-4");
})