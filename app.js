// console.log('hey');

$(document).ready(function() {
    console.log('hey i am working!');

    // start about us
    $(window).scroll(function() {
        // console.log('hey');
        var getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);
        if (getscrolltop >= 400) {
            $('.aboutus-content').addClass('from-left');
            $('.aboutus-img').addClass('from-right');
        } else {
            $('.aboutus-content').removeClass('from-left');
            $('.aboutus-img').removeClass('from-right');
        };
    });
    // end about us


    // start premises
    $('.lightslider').lightSlider({
        item: 4,
        loop: true,
        slideMove: 2,
        mode: 'slide',
        slideEndAnimation: true,
        auto: true,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        responsive: [{
                breakpoint: 800,
                settings: {
                    item: 1,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ]
    });
    // end premises

    // start join us

    // console.log($('#accordion1'));
    $('#accordion1').accordion();

    // end join us
    getyear = new Date().getUTCFullYear()
    $('#year').text(getyear)


    $(window).scroll(function() {
        var getprogressbar = $('.progress-bar')
        getscrolltop = $(this).scrollTop();

        getclientHeight = document.documentElement.clientHeight;
        getscrollHeight = document.documentElement.scrollHeight;

        getcalcheight = getscrollHeight - getclientHeight;
        getfinalHeight = Math.round(getscrolltop * 100 / getcalcheight)
        getprogressbar.css({
            'background': `conic-gradient(steelblue ${getfinalHeight}%,#eee ${getfinalHeight}%)`
        });
    })
})