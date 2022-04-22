new Swiper('.collabs .swiper-container', {
    slidesPerView: 5,
    // spaceBetween: 30,
    navigation: {
        prevEl: '.collabs .swiper-prev',
        nextEl: '.collabs .swiper-next'
    },
    on: {
        slideChangeTransitionStart : function() {
            console.log(this.activeIndex);
            this.activeIndex.classList.add('focused');
        }
    }
});
