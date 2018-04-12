(function () {
    let link = document.querySelector('#hamButton');
    let container = document.querySelector('.container.header__container');
    let menuList = document.querySelector('.hamburger-menu__list');

    if (link) link.addEventListener('click', handleClick)

    function handleClick() {
        link.classList.toggle('open');
        container.classList.toggle('header__container_zindex_none');
        menuList.classList.toggle('hamburger-menu__list_active');
    }
})();

