(function ($) {
  "use strict";


  // $('.popup-youtube, .popup-vimeo').magnificPopup({
  //   // disableOn: 700,
  //   type: 'iframe',
  //   mainClass: 'mfp-fade',
  //   removalDelay: 160,
  //   preloader: false,
  //   fixedContentPos: false
  // });

  $("#accordion").on("hide.bs.collapse show.bs.collapse", e => {
  $(e.target)
    .prev()
    .find("i:last-child")
    .toggleClass("fa-minus fa-plus");
});

  $('.carousel').carousel();
  var msgs = ["Solve issues with mobile wireless connectivity ", "Solve issues with mobile wireless connectivity ", "Need better security from your wireless network?", "Connect your devices and mobile phones to one network", "More wireless telecom control with CBRS", "Lower your TCO with CBRS"];
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

  if ($('#scrollDown').length) {
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
  }
  else {
  }

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


  //YOutube Popup

  // Gets the video src from the data-src on each button

  var $videoSrc;
  $('.video-btn').click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);



  // when the modal is opened autoplay it  
  $('#myModal').on('shown.bs.modal', function (e) {

    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  })



  // stop playing the youtube video when I close the modal
  $('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src', $videoSrc);
  })

}(jQuery));