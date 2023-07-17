
$(function (){
    var body = $("html, body");

    // Mobile menu
    $('body').on('click', '.js-mobile-menu', function (e) {
        e.preventDefault();
        $(this).toggleClass('is-opened')
        $('.js-mobile-sidebar').toggleClass('is-opened')
    })

    // services
    $('body').on('click', '.js-services-link', function (e) {
        e.preventDefault();
        $('.js-nav-item-dropdown').toggleClass('is-opened')
    })

    $('body').on('click', '.js-services-mobile-link', function (e) {
        e.preventDefault();
        $(this).toggleClass('is-opened')
        $('.js-mobile-nav-item-dropdown').toggleClass('is-opened')
    })


    // Slider
    if ($('.js-main-slider').length) {
        const swiper = new Swiper('.js-main-slider', {
            loop: true,
            pagination: {
                el: '.js-main-slider .swiper-pagination',
            },
            navigation: {
                nextEl: '.js-main-slider .swiper-button-next',
                prevEl: '.js-main-slider .swiper-button-prev',
            }
        });
    }

    if ($('.js-services').length && $(window).width() > 992) {
        const swiper = new Swiper('.js-services', {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 42,
            navigation: {
                nextEl: '.js-services .swiper-button-next',
                prevEl: '.js-services .swiper-button-prev',
            }
        });
    }

    if ($('.js-news').length) {
        const swiper = new Swiper('.js-news', {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 40,
            navigation: {
                nextEl: '.js-news .swiper-button-next',
                prevEl: '.js-news .swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 8
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 8
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 40
                }
            }

        });
    }


    // PHONE
    var input = document.querySelector(".js-phone");
    window.intlTelInput(input, {
        // allowDropdown: false,
        // autoInsertDialCode: true,
        // autoPlaceholder: "off",
        // dropdownContainer: document.body,
        // excludeCountries: ["us"],
        // formatOnDisplay: false,
        // geoIpLookup: function(callback) {
        //   fetch("https://ipapi.co/json")
        //     .then(function(res) { return res.json(); })
        //     .then(function(data) { callback(data.country_code); })
        //     .catch(function() { callback("us"); });
        // },
        // hiddenInput: "full_number",
        // initialCountry: "auto",
        // localizedCountries: { 'de': 'Deutschland' },
        // nationalMode: false,
        // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
        // placeholderNumberType: "MOBILE",
        // preferredCountries: ['cn', 'jp'],
        // separateDialCode: true,
        // showFlags: false,
    });

    // GO TO TOP
    $('body').on('click', '.js-go-to-top', function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: "0" });
    })


    // POPUP
    $('body').on('click', '.js-popup-close', function (e) {
        $('body, .js-popup').removeClass('is-popup-opened popup--active');
    });

    $('body').on('click', '.js-popup-link', function (e) {
        e.preventDefault();
        let popupID = $(this).data('popup');
        $('.js-popup[data-popup="'+popupID+'"]').addClass('popup--active');
        $('body').addClass('is-popup-opened');
    })


    // PRICE
    $('body').on('click', '.js-price-select-item', function (e) {
        e.preventDefault();
        let priceContentID = $(this).data('price-content');
        if ($(window).width() > 992) {
            $('.js-price-select-item, .js-price-content').removeClass('is-selected');
            $(this).addClass('is-selected');
            $('.js-price-content[data-price-content="'+priceContentID+'"]').addClass('is-selected');
        } else {
            if ($('.js-price-select').hasClass('is-opened')) {
                $('.js-price-select').removeClass('is-opened');
            } else {
                $('.js-price-select').addClass('is-opened');
            }
            $('.js-price-select-item, .js-price-content').removeClass('is-selected');
            $(this).addClass('is-selected');
            $('.js-price-content[data-price-content="'+priceContentID+'"]').addClass('is-selected');
        }
    })


    // MORE REVIEWS
    $('body').on('click', '.js-reviews-more-btn', function (e) {
        e.preventDefault();
        $(this).hide();
        $('.js-reviews-more').addClass('is-opened')
    })

})