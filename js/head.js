let head = document.getElementById("head");
let bg = document.getElementById("background");

window.addEventListener("scroll", function () {
    var value = window.scrollY;
    head.style.top = value + "px";
    bg.style.top = value + "px";
});