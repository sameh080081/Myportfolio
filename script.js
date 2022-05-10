const burger = document.getElementById('burger');
const menuItems = document.getElementById('menu-block');
const close = document.getElementById('close');
const item1 = document.getElementById('menuitem1');
const item2 = document.getElementById('menuitem2');
const item3 = document.getElementById('menuitem3');
function show() {
    menuItems.style.display = "flex";
}
function hide() {
    menuItems.style.display = "none";
}
burger.addEventListener('click', show);
close.addEventListener('click', hide);
item1.addEventListener('click', hide);
item2.addEventListener('click', hide);
item3.addEventListener('click', hide);