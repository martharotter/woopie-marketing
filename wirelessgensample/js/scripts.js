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
  
   $("h1.bullet-heading").lettering('words');
   
   $("h1.date-heading").lettering('words');
  
});

$(function() {
	$('.footable').footable();
});

    $.quiz();

/* Aspect ratio videos */
$(function() {
    
    var $allVideos = $("iframe[src^='http://player.vimeo.com'], iframe[src^='https://fast.wistia.net'], iframe[src^='http://www.youtube.com'], object, embed"),
    $fluidEl = $("figure");
	    	
	$allVideos.each(function() {
	
	  $(this)
	    // jQuery .data does not work on object/embed elements
	    .attr('data-aspectRatio', this.height / this.width)
	    .removeAttr('height')
	    .removeAttr('width');
	
	});
	
	$(window).resize(function() {
	
	  var newWidth = $fluidEl.width();
	  $allVideos.each(function() {
	  
	    var $el = $(this);
	    $el
	        .width(newWidth)
	        .height(newWidth * $el.attr('data-aspectRatio'));
	  
	  });
	
	}).resize();

});
