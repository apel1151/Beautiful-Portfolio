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