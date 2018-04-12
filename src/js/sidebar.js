const sidebar = {
    init() {
        this.getElements();
        this.swipeSidebar();
        this.coverSidebar();
        this.clickSidebarButton();
        this.smoothJumpToArticle();
    },
    getElements() {
        this.sidebar = document.querySelector('#sidebar');
        this.sidebarButton = document.querySelector('#sidebarButton');
        this.article = document.querySelector('#article');
    },
    coverSidebar() {
        document.addEventListener('click', this.handleClick.bind(this));
        window.addEventListener('load', this.handleUpPage.bind(this));
        window.addEventListener('scroll', this.handleUpPage.bind(this));
    },
    clickSidebarButton() {
        this.sidebarButton.addEventListener('click', this.handleSidebarButton.bind(this));
    },
    swipeSidebar() {
        this.sidebar.addEventListener('touchstart', this.handleTouchStart.bind(this), false);
        this.sidebar.addEventListener('touchmove', this.handleTouchMove.bind(this), false);

        this.xDown = null;
        this.yDown = null;
    },
    smoothJumpToArticle() {
        $('a[href*="#"]')
        // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                    &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });
    },
    handleTouchStart(e) {
        this.xDown = e.touches[0].clientX;
        this.yDown = e.touches[0].clientY;
    },
    handleTouchMove(e) {
        if (!this.xDown || !this.yDown) {
            return;
        }

        this.xUp = e.touches[0].clientX;
        this.yUp = e.touches[0].clientY;

        this.xDiff = this.xDown - this.xUp;
        this.yDiff = this.yDown - this.yUp;

        if (Math.abs(this.xDiff) > Math.abs(this.yDiff)) {
            if (this.xDiff > 0) { /* left swipe */
                this.sidebar.classList.toggle('sidebar-open');
            }
            else { /* right swipe */
            }
        } else {
            if (this.yDiff > 0) { /* up swipe */
            }
            else { /* down swipe */
            }
        }
        /* reset values */
        this.xDown = null;
        this.yDown = null;
    },
    handleClick(e) {
        if (window.innerWidth <= 768) {
            let clickToSidebar = e.path.filter(item => item.id === 'sidebar');
            let sideBarOpen = this.sidebar.classList.contains('sidebar-open');

            if (clickToSidebar.length === 0 && sideBarOpen === true) {
                this.sidebar.classList.remove('sidebar-open');
            }
        }
    },
    handleSidebarButton(e) {
        e.preventDefault();
        if (window.innerWidth <= 768) this.sidebar.classList.toggle('sidebar-open');
    },
    handleUpPage() {
        let containerPosition = this.article.getBoundingClientRect().top;
        if (containerPosition > 400) {
            this.sidebar.classList.add('sidebar-cover-button');
            this.sidebar.classList.remove('sidebar-open');
        } else {
            this.sidebar.classList.remove('sidebar-cover-button');
        }
    }
}

export default sidebar