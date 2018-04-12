import '../../js/hamburger-button'

function moveParallaxLayers(layer, windowScroll, speeds) {
    let speed = speeds / .4;
    let speedPercent = windowScroll / speed  + '%';
    let transformString = `translate3d(0, ${speedPercent}, 0)`;

    layer.style.transform = transformString;
    layer.style.webkitTransform = transformString;
}

function scrollParallax() {
    let parallaxContainer = document.querySelector('#parallax');
    let htmlWidth = document.querySelector('html').offsetWidth;

    if(parallaxContainer && (htmlWidth > 768)) {
        parallaxContainer.classList.toggle('parallax_turn_on');
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
    let htmlWidth = document.querySelector('html').offsetWidth;

    if(parallaxContainer && (htmlWidth > 768)) {
        parallaxContainer.classList.toggle('parallax_turn_on');
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

scrollParallax();
mouseParallax();