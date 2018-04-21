(function () {
    let images = document.images,
        imagesTotalCount = images.length,
        imagesLoadedCount = 0;

    for (let i = 0; i < imagesTotalCount; i++) {
        let imageClone = new Image();
        imageClone.src = images[i].src;
        imageClone.onload = imageLoaded;
        imageClone.onerror = imageLoaded;
    }

    function imageLoaded() {
        imagesLoadedCount++;

        let preloaderPercent = document.querySelector('.preloader__percent');
        let circleLarge = document.querySelector('#circleLarge');
        let circleMiddle = document.querySelector('#circleMiddle');
        let circleSmall = document.querySelector('#circleSmall');

        let percNumber = ((100 / imagesTotalCount) * imagesLoadedCount) << 0;
        let perc = percNumber + '%';
        preloaderPercent.textContent = perc;

        circleLarge.style.strokeDashoffset = -percNumber * 4.39 - 439;
        circleMiddle.style.strokeDashoffset = -percNumber * 3.45 - 345;
        circleSmall.style.strokeDashoffset = -percNumber * 2.51 - 251;

        if (imagesLoadedCount >= imagesTotalCount) {
            setTimeout(function () {
                let preloader = document.querySelector('.preloader');
                preloader.classList.add('done')
            }, 500)
        }
    }
})();