let head = document.querySelector(".head");
let bg = document.querySelector(".bg");

window.addEventListener("scroll", (event) => function () {
    var value = window.scrollY;
    head.style.top = value + "px";
    bg.style.top = value + "px";
});