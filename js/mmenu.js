let keys = {
    ESC: 27,
};
const burger = document.querySelector(".header-burger");
const menu_close = document.querySelector('.header-menu__close');
const menu = document.querySelector('.mob-menu');

function showMenu() {
    menu.classList.add('mob-menu__showed');
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === keys.ESC) {
            closeMenu();
        }
    });
}

function closeMenu() {
    menu.classList.remove('mob-menu__showed');
}

burger.addEventListener('click', showMenu);
menu_close.addEventListener('click', closeMenu);