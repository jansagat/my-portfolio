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

function moveParallaxLayers(layer, windowScroll, speeds) {
    let speed = speeds / .4;
    let speedPercent = windowScroll / speed  + '%';
    let transformString = `translate3d(0, ${speedPercent}, 0)`;

    layer.style.transform = transformString;
    layer.style.webkitTransform = transformString;
}

function scrollParallax() {
    let parallaxContainer = document.querySelector('#parallax');
    if(parallaxContainer) {
        let layers = parallaxContainer.children;

        window.addEventListener('scroll', function () {
            let windowScroll = window.pageYOffset;

            for(let i = 0; i < layers.length; i++) {
                moveParallaxLayers(layers[i], windowScroll, i + 1);
            }
        });
    }
}

function mouseParallax() {
    let parallaxContainer = document.querySelector('#parallax_mouse');
    if(parallaxContainer) {
        let layers = parallaxContainer.children;

        window.addEventListener('mousemove', function (e) {
            let initialX = (window.innerWidth / 2) - e.pageX;
            let initialY = (window.innerHeight / 2) - e.pageY;

            [].slice.call(layers).forEach(function(layer, index) {
                let
                    divider = index / 200,
                    positionX = initialX * divider,
                    positionY = initialY * divider,
                    bottomPosition = (window.innerHeight / 2) * divider,
                    transformString = 'translate(' + positionX + 'px,' + positionY + 'px)',
                    image = layer.firstElementChild;

                layer.style.transform = transformString;
                image.style.bottom = '-' + bottomPosition + 'px';
            });

        });
    }
}

clickHamburgerMenu();
scrollParallax();
mouseParallax();