$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
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

