$(document).ready(function () {
    $(".my-slider").slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $(".slides").slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $(".prev").click(function () {
        $(".slides").slick("slickPrev");
    });
    $(".next").click(function () {
        $(".slides").slick("slickNext");
    });

    $(document).ready(function () {
        $(".products nav li").on("click", function () {
            $(this).addClass("active");
            $(this).siblings(".active").removeClass("active");
        });
        var filterizd = $(".filtr-container").filterizr({
            //options object
        });
    });

    AOS.init({
        duration: 1000
    });
})