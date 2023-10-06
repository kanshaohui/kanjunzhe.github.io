const toggleBtn = document.querySelector('.head .toggle-btn');
const toggleBtnIcon = document.querySelector(".htad .toggle-btn ion-icon")
const dropdownMenu = document.querySelector(".head .toggle-controls")

toggleBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle("open");
    const isOpen = dropdownMenu.classList.contains("open");
    toggleBtnIcon.setAttribute("name", isOpen ? "close-circle-outline" : "list-circle-outline")
});