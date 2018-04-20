import Rellax from 'rellax';

(function () {
    let rellax = new Rellax('.rellax', {
        speed: -2,
        center: false,
        round: true,
        vertical: true,
        horizontal: false
    });

    window.addEventListener('DOMContentLoaded', function () {
        if (window.innerWidth > 768) {
            let images = document.getElementsByClassName('parallax__image');
            for (let i = 0; i < images.length; i++) {
                images[i].src = images[i].dataset.image
            }
        } else {
            let header = document.querySelector('.header');
            header.classList.add('header__bg');

            rellax.destroy();
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth <= 768) {
            rellax.destroy();
        } else {
            rellax.refresh();
        }
    });
})();