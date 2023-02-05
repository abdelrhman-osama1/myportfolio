// toggle menu
let btn = document.querySelector(".icon");
let links = document.querySelector(".open");

btn.onclick = function (e) {
//stop propagation
e.stopPropagation();
//toggle class "active" on icon
this.classList.toggle("active");
//toggle class "list" on open
links.classList.toggle("list");
}
// click anywhere outside menu
document.addEventListener("click", (e) => {
    //check if menu is open
    if (e.target !== btn && e.target !== links) {
        if (links.classList.contains("list")) {
            //toggle class "active" on icon
            btn.classList.toggle("active");
            //toggle class "list" on open
            links.classList.toggle("list");
        }
    }
});
//stop propagation on menu
links.onclick = function (e) {
    e.stopPropagation();
}
//change navbar bg 
function changeBg() {
    var navbar = document.getElementById("navbar");
    var scrollValue = window.scrollY;
    if (scrollValue < 15 ){
        navbar.classList.remove("bgColor");
    }else{
            navbar.classList.add("bgColor");
        }
}
window.addEventListener("scroll", changeBg);

// add class active on every section in big screens 

const li=document.querySelectorAll("nav .mainnav li a");
const sec=document.querySelectorAll("section");

window.addEventListener('scroll', () => {
    let current = '';
    sec.forEach(section => {
        let sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 300){
            current = section.getAttribute('id');
        }
    });
    li.forEach(li => {
        li.classList.remove('active');
        document.querySelector('nav .mainnav li a[href*= '+ current +']').classList.add('active');
    });
    });

// add class active on every section in small screens

    const span=document.querySelectorAll("nav .open li a");
const section=document.querySelectorAll("section");

window.addEventListener('scroll', () => {
    let current = '';
    section.forEach(section => {
        let sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 300){
            current = section.getAttribute('id');
        }
    });
    span.forEach(span => {
        span.classList.remove('active');
        document.querySelector('nav .open li a[href*= '+ current +']').classList.add('active');
    });
    });

