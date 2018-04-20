(function () {
    let skills = document.getElementsByClassName('skills__svg');
    let aboutRight = document.querySelector('.about__right');

    window.addEventListener('scroll', function () {
        let aboutRightTop = aboutRight.getBoundingClientRect().top;
        if (aboutRightTop < 120) {
            for (let i = 0; i < skills.length; i++) {
                let dashOffset = skills[i].dataset.percent * 2.83;
                skills[i].style.strokeDashoffset = dashOffset;
            }
        }
    })
})();