import '../../../sass/main.scss';
import slider from '../../../js/slider';

function blur() {
    let imgWidth = document.querySelector('.section.review').offsetWidth;
    let backgroundTop = document.querySelector('.review__background').offsetTop;
    let lengthToParentTop = document.querySelector('.feedback.review__feedback').offsetTop;
    let left = document.querySelector('.feedback.review__feedback').offsetLeft;
    let blur = document.querySelector('.feedback__blur');
    let formBackgroundPositionTop = lengthToParentTop - backgroundTop;

    if (imgWidth <= 900) {
        blur.style.backgroundSize = 900 + 'px' + ' ' + 'auto';
    } else {
        blur.style.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
    }
    blur.style.backgroundPosition = -left + 'px' + ' ' + -formBackgroundPositionTop + 'px';
}

window.addEventListener('load', blur);

window.addEventListener('resize', blur);

slider.init();