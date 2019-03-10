jQuery(function ($) {

    'use strict';

    (function () {
    $('a[href]').click(function(event) {
        event.preventDefault();
        window.location = this.href;
        console.log("href",this.href)
        });
    })
    
    (function () {
        $('#preloader').delay(200).fadeOut('slow');
    }());

    (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 0) {
                $('nav.navbar').addClass('sticky-nav');
            }
        });
    }());
    
    (function () {
        $('a.page-scroll').on('click', function (e) {
            e.preventDefault();
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
        });
    }());

    (function () {
        $('.navbar-collapse ul li a').on('click', function () {
            if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
                $('.navbar-toggle:visible').trigger('click');
            }
        });
    }());
}); 