(function ($) {

  "use strict";



  $('a[href*="#"]').on('click', function (e) {
    // e.preventDefault()

    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500,
      'linear'
    )
  });

  if ($(window).width() < 768) {
    // alert('Less than 960');
  }
  else {

    function toggleDropdown(e) {
      const _d = $(e.target).closest('.dropdown'),
        _m = $('.dropdown-menu', _d);
      setTimeout(function () {
        const shouldOpen = e.type !== 'click' && _d.is(':hover');
        _m.toggleClass('show', shouldOpen);
        _d.toggleClass('show', shouldOpen);
        $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
      }, e.type === 'mouseleave' ? 300 : 0);
    }

    $('body')
      .on('mouseenter mouseleave', '.dropdown', toggleDropdown)
      .on('click', '.dropdown-menu a', toggleDropdown);
    // $('.dropdown a').on('click tap', e => e.preventDefault());
  }


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
  var msgs = ["Solve issues with mobile wireless connectivity ", "Want higher reliability wireless in your building?", "Need better security from your wireless network?", "Connect your devices and mobile phones to one network", "More wireless telecom control with CBRS"
    , "Lower your TCO with CBRS"];

  var indx = 0;
  $("#div").text(msgs[indx]);
  setInterval(function () {
    $("#div").fadeOut(
      500,
      function () {
        indx++;
        if (indx >= msgs.length) indx = 0;
        $(this).text(msgs[indx]);
        $(this).fadeIn(300);
      });
  }, 3000);



  var msgs2 = ["Solve with CBRS", "Lower your TCO with CBRS", "Flexible Capex and Opex options"];

  var indx2 = 0;
  $("#div2").text(msgs2[indx]);
  setInterval(function () {
    $("#div2").fadeOut(
      500,
      function () {
        indx2++;
        if (indx2 >= msgs2.length) indx2 = 0;
        $(this).text(msgs2[indx2]);
        $(this).fadeIn(350);
      });
  }, 3100);

  var $videoSrc;
  $('.video-btn').click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);



  // when the modal is opened autoplay it
  $('#videoModal').on('shown.bs.modal', function (e) {

    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  })



  // stop playing the youtube video when I close the modal
  $('#videoModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src', $videoSrc);
  });
}(jQuery));