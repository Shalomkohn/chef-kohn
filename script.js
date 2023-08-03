$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
            }
        }
    ]
});

$(".hero-cta").click(function () {
    $('html, body').animate({
        scrollTop: $("#bookingSection").offset().top
    }, 800);
});
