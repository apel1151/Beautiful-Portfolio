window.addEventListener("scroll", function(){
    var navWrapper = document.querySelector(".navWrapper");
    navWrapper.classList.toggle('sticky', window.scrollY > 0)
})

const menuItems = document.querySelector(".menuItem");
const menuBtn = document.querySelector(".menuBtn");
const closeBtn = document.querySelector(".closeBtn");


menuBtn.addEventListener("click", () =>{
    menuItems.classList.add("active");
})

closeBtn.addEventListener("click", () => {
    menuItems.classList.remove("active");
})



const tabs = document.querySelectorAll('.tab_button');
const allContent = document.querySelectorAll('.content');

tabs.forEach( (tab, index)=>{
     tab.addEventListener('click', (e) =>{
        tabs.forEach((tab => tab.classList.remove("active")));
        tab.classList.add("active");

        var line = document.querySelector('.line');
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";

        allContent.forEach(content => content.classList.remove("active"));
        allContent[index].classList.add("active");
     })

     
})


ScrollReveal({ 
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.hero', { origin: "left"});
ScrollReveal().reveal('.aboutInfo p', { origin: "left"});
ScrollReveal().reveal('.aboutInfo .imgShape', { origin: "right"});
ScrollReveal().reveal('.skills', { origin: "bottom"});
ScrollReveal().reveal('.experience h1', { origin: "top"});
ScrollReveal().reveal('.tab_box', { origin: "left"});
ScrollReveal().reveal('.tab_content', { origin: "right"});
ScrollReveal().reveal('.projects h1', { origin: "top"});
ScrollReveal().reveal('.one', { origin: "left"});
ScrollReveal().reveal('.two', { origin: "right"});
ScrollReveal().reveal('.three', { origin: "bottom"});
ScrollReveal().reveal('.navWrapper', { origin: "top"});
ScrollReveal().reveal('.socialIcons', { origin: "top"});
ScrollReveal().reveal('.email', { origin: "bottom"});
ScrollReveal().reveal('.box1', { origin: "left"});
ScrollReveal().reveal('.box2', { origin: "right"});
ScrollReveal().reveal('.contact-info', { origin: "left"});
ScrollReveal().reveal('.contact-form', { origin: "right"});
ScrollReveal().reveal('.footer', { origin: "bottom"});
ScrollReveal().reveal('.contact h1', { origin: "top"});
