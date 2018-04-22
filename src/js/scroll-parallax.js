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
        if (window.innerWidth <= 768) {
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