new Swiper('.collabs .swiper-container', {
    slidesPerView: 'auto',
    navigation: {
        prevEl: '.collabs .swiper-prev',
        nextEl: '.collabs .swiper-next'
    },
    on: {
        init: function() {
            this.slides[this.activeIndex+1].classList.add('focused-1');
            this.slides[this.activeIndex+2].classList.add('focused-2');
            this.slides[this.activeIndex+3].classList.add('focused-3');
            this.slides[this.activeIndex+4].classList.add('focused-4');

        },
        slideChangeTransitionStart : function() {
            console.log();
            // this.activeIndex.classList.add('focused');
            console.log(this.slides[this.activeIndex]);
            this.slides[this.activeIndex].classList.remove('focused-1');
            this.slides[this.activeIndex+1].classList.remove('focused-2');
            this.slides[this.activeIndex+2].classList.remove('focused-3');
            this.slides[this.activeIndex+3].classList.remove('focused-4');


            this.slides[this.activeIndex+1].classList.add('focused-1');
            this.slides[this.activeIndex+2].classList.add('focused-2');
            this.slides[this.activeIndex+3].classList.add('focused-3');
            this.slides[this.activeIndex+4].classList.add('focused-4');



        }
    }
});


// in-other-news에서 스크롤시 배경색바뀌는 코드
const bgColor = document.querySelector('.bg-color');

document.addEventListener('scroll', function() {

    const st = $(document).scrollTop();
    const wh = $(document).height();


    var scrollPos = (st*10)/wh;
    if(scrollPos >= 8)
        {
            scrollPos = 8;
            bgColor.style.backgroundColor ='#fff';
        }
    else if(scrollPos <=8)
        {
            bgColor.style.backgroundColor ='#fffcc0';
        }
});

// RANDOM POSITION DIVS
const emojis = document.querySelectorAll('.emoji');
emojis.forEach(function(emoji) {
    console.log('HI');
    rLeft = Math.floor(Math.random() * 90);
    rTop = Math.floor(Math.random() * 100);
    console.log(rLeft);
    emoji.style.left = rLeft+'vw';
    emoji.style.top = rTop+'vh';


});

//순차적애니메이션 만들기위해 show 클래스 붙여주기
const spyEls = document.querySelectorAll('.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});
//(scroll-spy 클래스가 있는요소가 뷰포트의 .8이상 내려갈 시 show라는 클래스  부착