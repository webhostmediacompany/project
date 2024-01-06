$(document).ready(function () {
    $('.ath_carousel_se_01_carousel').owlCarousel({
        items: 2,
        nav: true,
        loop: true,

        mouseDrag: true,
        responsiveClass: true,
        /*navText : ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],*/
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            767: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });

});