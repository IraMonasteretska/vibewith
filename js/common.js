const burgerBtn = document.querySelector('.burgerbtn');
const menu = document.querySelector('.header__nav');
const closeMenu = document.querySelector('.closemenu')

burgerBtn.addEventListener('click', function () {
    menu.classList.add('show');
});

closeMenu.addEventListener('click', function () {
    menu.classList.remove('show');
});