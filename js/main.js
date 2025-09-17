/*
  [JS Index]
*/


/*
  1. preloader
  2. timeout function
  3. navigation
  4. animate elements
  5. magnificPopup
  6. owl carousel
  7. slick slider
  8. toggle blog panels
  9. google maps zoom ON/OFF
  10. swiper slider
  11. contact form
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
		
        // 2. timeout function
        $(".hero-bg").addClass("hero-bg-show");
    });
	
    // 3. navigation
    $('a[href*="#"]:not([href="#"])').on("click", function() {
        console.log("click");
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=" + this.hash.slice(1) + "]');
            if (target.length) {
                if ($(window).width() < 768) {
                    $("html, body").animate({
                        scrollTop: target.offset().top - 0
                    }, 1000);
                } else {
                    $("html, body").animate({
                        scrollTop: target.offset().top - 0
                    }, 1000);
                }
                return false;
            }
        }
    });
	// navigation active links
    $("a.navigation-state").on("click", function() {
        $("a.navigation-state").removeClass("active");
        $(this).addClass("active");
    });
    // navigation fire
    $(".navigation-fire").on("click", function() {
        if ($(".panel-from-left, .panel-from-right, .panel-overlay-from-left, .panel-overlay-from-right").hasClass("open")) {
            $(".panel-from-left, .panel-from-right, .panel-overlay-from-left, .panel-overlay-from-right").removeClass("open");
        } else {
            $(".panel-from-left, .panel-from-right, .panel-overlay-from-left, .panel-overlay-from-right").addClass("open");
        }
    });
    $("nav.navigation-menu a").on("click", function() {
        $(".panel-from-left, .panel-from-right, .panel-overlay-from-left, .panel-overlay-from-right").removeClass("open");
    });
	
    $(window).on("scroll", function() {
        // 4. animate elements
        if ($(this).scrollTop() > 100) {
            $(".round-menu").addClass("direction");
            $(".to-top-arrow").addClass("show");
			$(".hero-heading").addClass("hero-heading-hide").removeClass("hero-heading-show");
			$(".testimonials-signature-home").addClass("testimonials-signature-home-hide").removeClass("testimonials-signature-home-show");
			$(".scroll-indicator-wrapper").addClass("scroll-indicator-wrapper-position-secondary");
        } else {
            $(".round-menu").removeClass("direction");
            $(".to-top-arrow").removeClass("show");
			$(".hero-heading").removeClass("hero-heading-hide").addClass("hero-heading-show");
			$(".testimonials-signature-home").removeClass("testimonials-signature-home-hide").addClass("testimonials-signature-home-show");
			$(".scroll-indicator-wrapper").removeClass("scroll-indicator-wrapper-position-secondary");
        }
    });
	
    // 5. magnificPopup
    $(".popup-photo").magnificPopup({
        type: "image",
        gallery: {
            enabled: false,
            tPrev: "",
            tNext: "",
            tCounter: "%curr% / %total%"
        },
        removalDelay: 100,
        mainClass: "mfp-fade",
        fixedContentPos: false
    });
	$(".popup-photo-gallery").each(function() {
        $(this).magnificPopup({
            delegate: ".popup-photo-gallery-open",
            type: "image",
            gallery: {
                enabled: true
            },
            removalDelay: 100,
            mainClass: "mfp-fade",
            fixedContentPos: false
        });
    });
	
    // 6. owl carousel
    $("#owl-carousel-team").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-team',
        responsive: {
            0: {
                items: 1,
                margin: 30
            },
            768: {
                items: 2,
                margin: 50
            },
            980: {
                items: 2,
                margin: 50
            },
            1240: {
                items: 3,
                margin: 50
            }
        }
    });
    $("#owl-carousel-news-1").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-news-all.owl-nav-custom-news-1',
        responsive: {
            0: {
                items: 1,
                margin: 30
            },
            768: {
                items: 1,
                margin: 50
            },
            980: {
                items: 1,
                margin: 50
            },
            1240: {
                items: 2,
                margin: 50
            }
        }
    });
    $("#owl-carousel-news-2").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-news-all.owl-nav-custom-news-2',
        responsive: {
            0: {
                items: 1,
                margin: 30
            },
            768: {
                items: 1,
                margin: 50
            },
            980: {
                items: 1,
                margin: 50
            },
            1240: {
                items: 2,
                margin: 50
            }
        }
    });
	$("#owl-carousel-news-3").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-news-all.owl-nav-custom-news-3',
        responsive: {
            0: {
                items: 1,
                margin: 30
            },
            768: {
                items: 1,
                margin: 50
            },
            980: {
                items: 1,
                margin: 50
            },
            1240: {
                items: 2,
                margin: 50
            }
        }
    });
	
	// 7. slick slider
    $(".slick-fullscreen-slideshow-zoom-fade").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        speed: 1600,
        draggable: true,
        dots: false,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });
	
    // 8. toggle blog panels
    $(".blog-side-launcher").on("click", function() {
        var divClass = $(this).attr("data-id");
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $("." + divClass).addClass("open");
        } else {
            $(this).addClass("open");
            $("." + divClass).addClass("open");
        }
    });
    $(".blog-side-launch, .blog-side-text").on("click", function() {
        $(".panel-from-left-blog, .panel-overlay-from-right-blog").removeClass("open");
    });
	
	// 9. google maps zoom ON/OFF
    $(".google-maps").on("click", function() {
        $('.google-maps iframe').css("pointer-events", "auto");
    });
    $(".google-maps").on("mouseleave", function() {
        $('.google-maps iframe').css("pointer-events", "none");
    });
	
	// 10. swiper slider
    var swiper1 = new Swiper(".swiper-container-wrapper .swiper-container.swiper1", {
        preloadImages: false,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
		init: true,
        loop: false,
        speed: 1200,
        grabCursor: true,
        mousewheel: false,
        keyboard: true,
        simulateTouch: true,
        parallax: true,
        effect: "slide",
        pagination: {
            el: ".swiper-slide-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".slide-next",
            prevEl: ".slide-prev"
        },
        scrollbar: false
    });
	swiper1.on("slideChangeTransitionStart", function() {
        $(".hero-bg").find("video").each(function() {
            this.pause();
        });
    });
    swiper1.on("slideChangeTransitionEnd", function() {
        $(".hero-bg").find("video").each(function() {
            this.play();
        });
    });
    swiper1.on("slideChangeTransitionStart", function () {
        $(".slider-progress-bar").removeClass("slider-active");
    });
    swiper1.on("slideChangeTransitionEnd", function () {
        $(".slider-progress-bar").addClass("slider-active");
    });
    var playButton = $(".swiper-slide-controls-play-pause-wrapper");
    function autoEnd() {
        playButton.removeClass("slider-on-off");
        swiper1.autoplay.stop();
    }
    function autoStart() {
        playButton.addClass("slider-on-off");
        swiper1.autoplay.start();
    }
    playButton.on("click", function () {
        if (playButton.hasClass("slider-on-off")) autoEnd();
        else autoStart();
        return false;
    });
	var swiper2 = new Swiper(".swiper-container-wrapper .swiper-container.swiper2", {
        preloadImages: false,
        autoplay: false,
        init: true,
        loop: false,
        grabCursor: false,
        mousewheel: false,
        keyboard: false,
        simulateTouch: false,
        parallax: false,
        pagination: false,
        navigation: false
    });
	
    // 11. contact form
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
	
	
});