(function ($) {
  "use strict";


  $('.popup-youtube, .popup-vimeo').magnificPopup({
    // disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });



  $('.carousel').carousel();
  var msgs = ["Having issues with ", "Lower your TCO with"];
  var msgs2 = ["CONNECTIVITY", "CBRS"];
  var indx = 0;
  $("#div").text(msgs[indx]);
  setInterval(function () {
    $("#div").fadeOut(
      500,
      function () {
        indx++;
        if (indx >= msgs.length) indx = 0;
        $(this).text(msgs[indx]);
        $(this).fadeIn(200);
      });
  }, 3000);

  var indx2 = 0;
  $("#div2").text(msgs2[indx2]);
  setInterval(function () {
    $("#div2").fadeOut(
      500,
      function () {
        indx2++;
        if (indx2 >= msgs2.length) indx2 = 0;
        $(this).text(msgs2[indx2]);
        $(this).fadeIn(200);
      });
  }, 3000);
  gsap.to("#scrollDown", {
    y: 5,
    repeat: -1,
    duration: 1,
    yoyo: true
  });

  gsap.to("#scrollDown .arrow", {
    y: 20,
    repeat: -1,
    duration: 1,
    yoyo: true
  });

  $(".navDropWrapper").hover(function () {
    $(this).children('.sub_menu').toggleClass('show');

  });


  var sideTabsPaneHeight = function () {
    var navHeight = $('.nav-tabs.nav-tabs-left').outerHeight() || $('.nav-tabs.nav-tabs-right').outerHeight() || 0;

    var paneHeight = 0;

    $('.tab-content.side-tabs .tab-pane').each(function (idx) {
      paneHeight = $(this).outerHeight() > paneHeight ? $(this).outerHeight() : paneHeight;
    });

    $('.tab-content.side-tabs .tab-pane').each(function (idx) {
      $(this).css('min-height', navHeight + 'px');
    });
  };


  sideTabsPaneHeight();

  $(window).resize(function () {
    sideTabsPaneHeight();
  });

  $('.nav-tabs.nav-tabs-left').resize(function () {
    sideTabsPaneHeight();
  });
}(jQuery));