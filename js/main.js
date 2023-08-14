
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

    $('body').on('click', function (e) {
        if ($('.js-nav-item-dropdown').hasClass('is-opened') && !$(e.target).hasClass('js-services-link')) {
            $('.js-nav-item-dropdown').removeClass('is-opened')
        }
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

    if ($('.js-services').length) {
        const swiper = new Swiper('.js-services', {
            // loop: true,
            slidesPerView: 3,
            spaceBetween: 42,
            navigation: {
                nextEl: '.js-services .swiper-button-next',
                prevEl: '.js-services .swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 'auto',
                    spaceBetween: 10,
                },
                993: {
                    slidesPerView: 3,
                }
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

    if ($('.js-doctors-list').length) {
        const swiper = new Swiper('.js-doctors-list', {
            slidesPerView: 3,
            spaceBetween: 40,
            navigation: {
                nextEl: '.js-doctors-list .swiper-button-next',
                prevEl: '.js-doctors-list .swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
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

    if ($('.js-doctors-list-2').length) {
        const swiper = new Swiper('.js-doctors-list-2', {
            slidesPerView: 4,
            spaceBetween: 40,
            navigation: {
                nextEl: '.js-doctors-list-2 .swiper-button-next',
                prevEl: '.js-doctors-list-2 .swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 8
                },
                767: {
                    slidesPerView: 4,
                    spaceBetween: 40
                }
            }

        });
    }

    if ($('.js-diploms-list').length) {
        const swiper = new Swiper('.js-diploms-list', {
            slidesPerView: 2,
            spaceBetween: 16,
            navigation: {
                nextEl: '.js-diploms-list .swiper-button-next',
                prevEl: '.js-diploms-list .swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 16
                }
            }

        });
    }


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


    // ACCORDION
    $('body').on('click', '.js-accordion-btn', function (e) {
        e.preventDefault();
        $(this).toggleClass('is-opened');
        $(this).next('.js-accordion-content').slideToggle()
    })


    // FANCYBOX
    if ($('.js-fancybox').length) {
        Fancybox.bind('.js-fancybox', {
            // Your custom options
        });
    }


    // GALLERY
    if ($('.js-gallery').length) {
        var $gridOption = {
            itemSelector: '.js-gallery-item',
            columnWidth: '.grid-sizer',
            gutter: 40,
            isAnimated: true
        }

        var $grid = $('.js-gallery').masonry($gridOption);

        $('body').on('click', '.js-gallery-more', function (e) {
            e.preventDefault();
            var i = 0;
            $('.js-gallery-item-more').each(function (e) {
                if (i < 11 && !$(this).is(':visible')) {
                    i++;
                    $(this).show();
                    if ($(this).hasClass('js-gallery-item-last')) {
                        $('.js-gallery-more').hide()
                    }
                }
            })
            $grid.masonry('layout');
        })
    }


    // TIME
    if ($('.js-time').length) {
        $('.js-time').timepicker({
            timeFormat: 'HH:mm',
            interval: 15,
        });
    }


    // FORM
    $('body').on('click', '.js-submit-form', function (e) {

        var formevent = e;
        let form = $(this).parents('.js-form');
        let formErrors = form.find('.js-form-errors');
        formErrors.html('');

        if (form.find('.js-input').length) {
            form.find('.js-input').each(function (e) {
                if ($(this).val().length < 1) {
                    let errorText = '<div>Поле "' + $(this).data('field-name') + '" не может быть пустым</div>';
                    $(errorText).appendTo(formErrors);
                    formevent.preventDefault();
                }
            })
        }

        if (form.find('.js-phone').length) {
            let phoneField = form.find('.js-phone');
            if (phoneField.val().length < 18) {
                let errorText = '<div>Введите корректный номер телефона</div>';
                $(errorText).appendTo(formErrors)
                formevent.preventDefault();
            }

        }

        if (form.find('.js-agree').length) {
            let agreeField = form.find('.js-agree');
            if (!agreeField.is(':checked')) {
                let errorText = '<div>Дайте согласие на обработку персональных данных</div>';
                $(errorText).appendTo(formErrors)
                formevent.preventDefault();
            }
        }

    })


    // TABS
    $('body').on('click', '.js-tab-link', function (e) {
        e.preventDefault();
        let tabID = $(this).data('tab-id');
        if (!$(this).hasClass('methods-tabs-nav-link--selected')) {
            $('.js-tab-link').removeClass('methods-tabs-nav-link--selected');
            $('.js-tab-info').removeClass('methods-tabs-info--selected');
            $('.js-tab-link[data-tab-id="'+tabID+'"]').addClass('methods-tabs-nav-link--selected');
            $('.js-tab-info[data-tab-id="'+tabID+'"]').addClass('methods-tabs-info--selected');
        }


    });


    // TESTIMONIAL
    if ($('.js-testimonial-main').length) {
        var testimonialThumbs = new Swiper ('.js-testimonial-thumbs', {
            slidesPerView: 'auto',
            spaceBetween: 40,
            slideToClickedSlide: true,
            watchSlidesProgress: true,
        });

        var testimonialMain = new Swiper ('.js-testimonial-main', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.js-testimonials-nav.swiper-button-next',
                prevEl: '.js-testimonials-nav.swiper-button-prev',
            },
            thumbs: {
                swiper: testimonialThumbs
            },
        });

    }

})


// PHONE MASK
$(function () {
    //+7 (XXX) XXX-XX-XX
    if ($('.js-phone').length > 0) {
        var trigger = false;
        var options = {
            'translation': {
                C: {
                    pattern: /[7]/
                },
                M: {
                    pattern: /[9,7,5,3,2]/
                },
                L: {
                    pattern: /[9,7,5]/
                }
            },
            onKeyPress: function onKeyPress(cep, e, field, options) {
                var masks = ['+7 (000) 000-00-00'];
                if (cep.length === 8) {
                    trigger = true;
                }
                if (cep.length < 8) {
                    trigger = false;
                }
                var mask = cep.length > 7 && trigger ? masks[0] : masks[0];
            }
        };
        $('.js-phone').mask('+7 (000) 000-00-00', options);
    }
});