const burger = document.getElementById('burger');
const menuItems = document.getElementById('menu-block');
const close = document.getElementById('close');
const items = document.querySelectorAll('.menu-items');
function show() {
  menuItems.style.display = 'flex';
}
function hide() {
  menuItems.style.display = 'none';
}
burger.addEventListener('click', show);
close.addEventListener('click', hide);
items.forEach(item => item.addEventListener('click', hide));