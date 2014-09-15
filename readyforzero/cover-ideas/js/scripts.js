// @codekit-prepend "../js-source/jquery.include.js"
// @codekit-prepend "../js-source/jquery.flexslider.js"
// @codekit-prepend "../js-source/jquery.touchwipe.1.1.1.js"
// @codekit-prepend "../js-source/footable-0.1.js"
// @codekit-prepend "../js-source/mustache.js"
// @codekit-prepend "../js-source/jquery.quiz.js"
// @codekit-prepend "../js-source/jquery.tooltipster.js"
// @codekit-prepend "../js-source/jquery.fitvids.js"
// @codekit-prepend "../js-source/respond.src.js"
// @codekit-prepend "../js-source/jquery.dotdotdot-1.5.9.js"
// @codekit-prepend "../js-source/jquery.reveal.js"
// @codekit-prepend "../js-source/modernizr.js"
// @codekit-prepend "../js-source/svg.js"
// @codekit-prepend "../js-source/smartquotes.js"


// Flexslider
$('.flexslider').flexslider({
	prevText:"<",
	nextText:">"
});

// Flippers
$(".flipper").click(function() {  //use a class, since your ID gets mangled
	$(this).toggleClass("rotated");      //add the class to the clicked element
});

// Next/previous pages with arrow keys and j/k keys
$(document).keyup(function(e) {
switch(e.keyCode) {
  case 37 : window.location = $('.prev').attr('href'); break; // Left arrow
  case 74 : window.location = $('.prev').attr('href'); break; // j
  case 39 : window.location = $('.next').attr('href'); break; // Right arrow
  case 75 : window.location = $('.next').attr('href'); break; // k
}
});


// Next/previous pages with swiping
$(".page").touchwipe({
 wipeLeft: function() { window.location = $('.next').attr('href');  },
 wipeRight: function() { window.location = $('.prev').attr('href'); },
 wipeUp: function() { },
 wipeDown: function() { },
 min_move_x: 100,
 min_move_y: 100,
 preventDefaultEvents: false
});

// 100% videos
$(".media-element-full").fitVids({ customSelector: "iframe[src^='http://fast.wistia.net']"});

// Expanding tables
$('.footable').footable();

// Quiz!
$.quiz();

// Swithing text
$(".switch").click(function () {
	$(".switchtext").toggle();
});

// Tooltips
$('.tooltip').tooltipster({
	maxWidth : 280
});

// Add ellipsis
$(".end-article").dotdotdot();


// Resize background images
$(window).load(function() {    

	var theWindow        = $(window),
	    $bg              = $("#bg"),
	    aspectRatio      = $bg.width() / $bg.height();
	    			    		
	function resizeBg() {
		
		if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
		    $bg
		    	.removeClass()
		    	.addClass('bgheight');
		} else {
		    $bg
		    	.removeClass()
		    	.addClass('bgwidth');
		}
		
		$bg.css({"margin-left": ( (theWindow.width() - $bg.width()) / 2) });
					
	}
	                   			
	theWindow.resize(resizeBg).trigger("resize");

});

