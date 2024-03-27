function toggleMenu() {
    var menuLinks = document.getElementById("menulinks");
    var container = document.querySelector('.burgermenu');

    menuLinks.style.display = (menuLinks.style.display === "flex") ? "none" : "flex";
    container.classList.toggle('change');
}