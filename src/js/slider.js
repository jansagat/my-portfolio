const data = require('../../data.js');

const slider = {
    init() {
        this.getElements();
        this.upArrow.addEventListener('click', this.clickArrows.bind(this));
        this.downArrow.addEventListener('click', this.clickArrows.bind(this));
        this.getCounter();
        this.setData();
    },
    getElements() {
        this.upArrow = document.querySelector('#upArrow');
        this.downArrow = document.querySelector('#downArrow');
        this.sliderTitle = document.querySelector('#sliderTitle');
        this.sliderStack = document.querySelector('#sliderStack');
        this.sliderLink = document.querySelector('#sliderLink');
        this.sliderImg = document.querySelector('#sliderImg');
        this.sliderPrevImg = document.querySelector('#sliderPrevImg');
        this.sliderNextImg = document.querySelector('#sliderNextImg');
    },
    getCounter() {
        this.prevSlide = 0;
        this.nextSlide = 2;
        this.activeSlide = this.nextSlide - 1;
        this.arrLastIndex = data.length - 1;
    },
    clickedUpArrow() {
        this.activeSlide++;
        this.prevSlide++;
        this.nextSlide++;

        if (this.nextSlide > this.arrLastIndex) this.nextSlide = 0;
        if (this.activeSlide > this.arrLastIndex) this.activeSlide = 0;
        if (this.prevSlide > this.arrLastIndex) this.prevSlide = 0;
    },
    clickedDownArrow() {
        this.activeSlide--;
        this.prevSlide--;
        this.nextSlide--;

        if (this.prevSlide < 0) this.prevSlide = this.arrLastIndex;
        if (this.activeSlide < 0) this.activeSlide = this.arrLastIndex;
        if (this.nextSlide < 0) this.nextSlide = this.arrLastIndex;
    },
    setData(direction = null) {
        if (direction === 'up') this.clickedUpArrow();
        if (direction === 'down') this.clickedDownArrow();

        this.sliderTitle.textContent = data[this.activeSlide].title;
        this.sliderStack.textContent = data[this.activeSlide].stack;
        this.sliderLink.href = data[this.activeSlide].link;
        this.sliderImg.src = data[this.activeSlide].image;
        this.sliderPrevImg.src = data[this.prevSlide].image;
        this.sliderNextImg.src = data[this.nextSlide].image;
    },
    clickArrows(e) {
        let arrow = e.currentTarget.id;
        let direction = arrow === 'upArrow' ? 'up' : 'down';
        this.setData(direction);
    },
}

export default slider;


