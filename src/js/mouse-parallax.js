(function () {
    let parallaxContainer = document.querySelector('#parallax_mouse');
    let htmlWidth = document.querySelector('html').offsetWidth;

    if (parallaxContainer && (htmlWidth > 768)) {
        parallaxContainer.classList.toggle('parallax_turn_on');
        let layers = parallaxContainer.children;

        window.addEventListener('mousemove', function (e) {
            let initialX = (window.innerWidth / 2) - e.pageX;
            let initialY = (window.innerHeight / 2) - e.pageY;

            [].slice.call(layers).forEach(function (layer, index) {
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
})();