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

function scrollToBooking() {
    $('html, body').animate({
        scrollTop: $("#bookingSection").offset().top
    }, 800);
}

$(".contact-link").click(() => scrollToBooking());

$(window).on("load", function () {
    if (window.location.hash == '#contactUsHere') {
        scrollToBooking()
    }
});

