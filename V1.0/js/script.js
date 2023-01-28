// toggle menu
let btn = document.querySelector(".icon");
let links = document.querySelector("ul");

btn.onclick = function (e) {
//stop propagation
e.stopPropagation();

//toggle class "active" on icon
this.classList.toggle("active");

//toggle class "open" on links
links.classList.toggle("open");
}
// click anywhere outside menu
document.addEventListener("click", (e) => {
    //check if menu is open
    if (e.target !== btn && e.target !== links) {

        if (links.classList.contains("open")) {
            //toggle class "active" on icon
            btn.classList.toggle("active");
            //toggle class "open" on links
            links.classList.toggle("open");
        }
    }
});
//stop propagation on menu
links.onclick = function (e) {
    e.stopPropagation();
}