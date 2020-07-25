function collapseNavbar() {
    var nav = $('.navbar');
    if (nav.length) {
        if (nav.offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    } else {
        // console.log('no navbar');
    }
}

function checkContainer() {
    if ($("body").hasClass("cd-about")) {
        console.log('yes it has class');
    }
}

function page_scroll() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
}
$(window).scroll(collapseNavbar);

toggle = function() {
    $('.menu').toggleClass('show');
    $('.nav_toggle').toggleClass('open');

    if ($(window).width() < 768) {
        $('.menu a').click(function() {
            $('.menu').removeClass('show');
            $('.nav_toggle').removeClass('open');
        });
    }
}





collapseNavbar();
page_scroll();
$(this).scrollTop(0);
wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();

