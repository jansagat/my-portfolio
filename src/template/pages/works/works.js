import '../../../sass/main.scss';

function blur() {
    let imgWidth = document.querySelector('.section.review').offsetWidth;
    let imgHeight = document.querySelector('.section.review').offsetHeight;
    let top = document.querySelector('.feedback.review__feedback').offsetTop;
    let left = document.querySelector('.feedback.review__feedback').offsetLeft;
    let blur = document.querySelector('.feedback__blur');

    blur.style.backgroundSize = imgWidth + 'px' + ' ' + imgHeight + 'px';
    blur.style.backgroundPosition = -left + 'px' + ' ' + -top + 'px';
}

blur();

window.addEventListener('resize', blur);
