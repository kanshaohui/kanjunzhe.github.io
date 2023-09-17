const cookieBox = document.querySelector(".wrapper"),
    buttons = document.querySelectorAll(".button");

const executeCodes = () => {
    if (document.cookie.includes("kanjunzhe")) return;

    cookieBox.classList.add("show");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            cookieBox.classList.remove("show");

            if (button.id == "accept") {
                document.cookie = "cookieBy= kanjunzhe; max-age=" + 60 * 60 * 24 * 3;
            }
        });
    });
};

window.addEventListener("load", executeCodes);