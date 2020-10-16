$(document).ready(function () {
    var carousel = document.querySelector('.carousel');
    if ($('.carousel').length) {
        var flkty = new Flickity(carousel, {
            initialIndex: Math.floor(Math.random() * 15),
            draggable: true,
            // freeScroll: true,
            pageDots: false,
            //   prevNextButtons: false,
            wrapAround: true,
            autoPlay: 3000,
            pauseAutoPlayOnHover: false,
            lazyLoad: true
        });
        flkty.on('lazyLoad.flickity', function (event, cellElement) {
            var img = event.originalEvent.target;
            console.log(event.originalEvent.type, img.src);
        });
    }

    $(".tabs").click(function () {
        $(".tabs").removeClass("active");
        $(".tabs h6").removeClass("font-weight-bold");
        $(".tabs h6").addClass("text-muted");
        $(this).children("h6").removeClass("text-muted");
        $(this).children("h6").addClass("font-weight-bold");
        $(this).addClass("active");
        current_fs = $(".active");
        next_fs = $(this).attr('id');
        next_fs = "#" + next_fs + "1";
        $("fieldset").removeClass("show");
        $(next_fs).addClass("show");
        current_fs.animate({}, {
            step: function () {
                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({
                    'display': 'block'
                });
            }
        });
    });

    var placeholderHeight = $('.placeholder').height();
    var placeholderWidth = $('.placeholder').width();
    var sliderParentHeight = $('.sliderParent').height();
    var sliderParentWidth = $('.sliderParent').width();

    var carouselHeight = ((sliderParentWidth * placeholderHeight) / placeholderWidth);
    console.log(placeholderWidth + "," + placeholderHeight + "," + sliderParentWidth + "," + sliderParentHeight);
    console.log(carouselHeight);


    //   var ad = document.querySelector('.flickity-viewport');
    // ad.style.height = carouselHeight; 



    if ($(window).width() < 768) {
        $('.menu-item-has-children').click(function () {
            $(this).toggleClass('show');
            $(this).find('.sub-menu').toggleClass('show');
        });
        $(".menu-item-has-children > a").click(function (ev) {
            ev.preventDefault();
        });
    } else {
        $('.menu-item-has-children').hover(function () {
            $(this).toggleClass('show');
            $(this).find('.sub-menu').toggleClass('show');
        });
    }
    // external js: flickity.pkgd.js

    var msgs = [
        "Solve issues with mobile wireless connectivity in your building ",
        "Want higher reliability wireless in your building?",
        "Need better security from your wireless network?",
        "Connect your devices and mobile phones to one network",
        "More wireless telecom control with CBRS and DAS",
        "Lower your Total Cost of Ownership with CBRS",
        "Increase your property value with DAS and CBRS"
    ];

    var indx = 0;
    $("#div").text(msgs[indx]);
    setInterval(function () {
        $("#div").fadeOut(
            500,
            function () {
                indx++;
                if (indx >= msgs.length) indx = 0;
                $(this).text(msgs[indx]);
                $(this).fadeIn(3000);
            });
    }, 3000);

    gsap.to("#scrollDown", {
        y: 5,
        repeat: -1,
        duration: 1,
        yoyo: true,
    });

    gsap.to("#scrollDown .arrow", {
        y: 20,
        repeat: -1,
        duration: 1,
        yoyo: true,
    });

    // var forHeight = $('. ').height();
    // $('.arrowheight').css('height', forHeight);
});