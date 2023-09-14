document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const sidebar = document.querySelector(".sidebar");

    menuButton.addEventListener("click", function () {
        sidebar.classList.toggle("show-sidebar");
    });
});