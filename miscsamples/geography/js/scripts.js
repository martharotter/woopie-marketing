$(window).load(function() {
    $('.flexslider').flexslider({
  		prevText:"<",
		nextText:">"
    });
    
    $(".flipper").click(function() {  //use a class, since your ID gets mangled
   		$(this).toggleClass("rotated");      //add the class to the clicked element
 	});
    
  $(document).keyup(function(e) {
    switch(e.keyCode) {
      case 37 : window.location = $('.prev').attr('href'); break; // Left arrow
      case 74 : window.location = $('.prev').attr('href'); break; // j
      case 39 : window.location = $('.next').attr('href'); break; // Right arrow
      case 75 : window.location = $('.next').attr('href'); break; // k
    }
  });

    $(".page").touchwipe({
     wipeLeft: function() { window.location = $('.next').attr('href');  },
     wipeRight: function() { window.location = $('.prev').attr('href'); },
     wipeUp: function() { },
     wipeDown: function() { },
     min_move_x: 100,
     min_move_y: 100,
     preventDefaultEvents: false
  });
  
  
  $(".media-element-full").fitVids();
  
});

$('.footable').footable();

$.quiz();

$(".switch").click(function () {
	$(".switchtext").toggle();
});

$('.tooltip').tooltipster({
	maxWidth : 280
});
