function clickHamburgerMenu() {
    let link = document.querySelector('.header__hamburger-button');
    let container = document.querySelector('.container.header__container');
    let menuList = document.querySelector('.hamburger-menu__list');

    if (link !== null) {
        link.addEventListener('click', function () {
            container.classList.toggle('header__container_zindex_none');
            link.classList.toggle('hamburger__button_active');
            menuList.classList.toggle('hamburger-menu__list_active');
        })
    }
}

clickHamburgerMenu();
