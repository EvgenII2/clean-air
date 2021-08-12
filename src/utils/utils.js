export default function changeMenu(selector) {
    const menu = document.querySelector(selector);
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}