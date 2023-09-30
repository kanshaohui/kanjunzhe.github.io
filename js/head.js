let head = document.querySelector(".head");

window.addEventListener("scroll", (event) => function () {
    var value = window.scrollY;
    // head.computedStyleMap.get("--scrollY").value = value + "px";
    head.style.top = value * 1 + "px";
});