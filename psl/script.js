(function($) {
  $.fn.fixMe = function() {
    return this.each(function() {
      var $this = $(this),
        $t_fixed;
      function init() {
        $this.wrap('<div class="container" />');
        $t_fixed = $this.clone();
        $t_fixed
          .find(".articlewrap")
          .remove()
          .end()
          .addClass("fixed")
          .insertBefore($this);
        resizeFixed();
      }
      function resizeFixed() {
        $t_fixed.find(".sectionhead").each(function(index) {
          $(this).css(
            "width",
            $this
              .find(".sectionhead")
              .eq(index)
              .outerWidth() + "px"
          );
        });
      }
      function scrollFixed() {
        var offset = $(this).scrollTop(),
          tableOffsetTop = $this.offset().top,
          tableOffsetBottom =
            tableOffsetTop +
            $this.height() -
            $this.find(".sectionhead").height();
        if (offset < tableOffsetTop || offset > tableOffsetBottom)
          $t_fixed.hide();
        else if (
          offset >= tableOffsetTop &&
          offset <= tableOffsetBottom &&
          $t_fixed.is(":hidden")
        )
          $t_fixed.show();
      }
      $(window).resize(resizeFixed);
      $(window).scroll(scrollFixed);
      init();
    });
  };
})(jQuery);

$(document).ready(function() {
  $(".section").fixMe();
  $(".up").click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      2000
    );
  });

  fetchStandings();
});

var fetchStandings = function(){
  $.getJSON("data/standings.json", function(data){
    
    var $table = $('#psl-standings tbody');

    var counter = 1;

    $.each(data, function(key, val){

      var $trow = $('<tr>').append(
        $('<td>').text(val.team),
        $('<td>').text(val.played),
        $('<td>').text(val.won),
        $('<td>').text(val.lost),
        $('<td>').text(val.tied),
        $('<td>').text(val.noresult),
        $('<td>').text(val.points),
        $('<td>').text(val.nrr)
      );

      $table.append($trow);

      counter++;

    });
  });
};