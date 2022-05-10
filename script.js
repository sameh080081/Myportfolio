const burger=document.getElementById('burger');
const menuItems=document.getElementById('menu-block');
const close=document.getElementById('close');
const item=document.getElementById('menuitem');

function show() {
    menuItems.style.display="flex";
}

function hide() {
    menuItems.style.display="none";
}

burger.addEventListener('click',show);
close.addEventListener('click',hide);
item.addEventListener('click',hide);