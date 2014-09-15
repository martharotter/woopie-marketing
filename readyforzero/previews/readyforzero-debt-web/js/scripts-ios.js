// @codekit-prepend "../js-source/jquery.include.js"
// @codekit-prepend "../js-source/jquery.reveal.ios.js"
// @codekit-prepend "../js-source/jquery.flexslider.js"
// @codekit-prepend "../js-source/footable-0.1.js"
// @codekit-prepend "../js-source/mustache.js"
// @codekit-prepend "../js-source/jquery.quiz.js"
// @codekit-prepend "../js-source/jquery.tooltipster.js"
// @codekit-prepend "../js-source/jquery.fitvids.js"
// @codekit-prepend "../js-source/respond.src.js"
// @codekit-prepend "../js-source/jquery.dotdotdot-1.5.9.js"

// Flexslider
$('.flexslider').flexslider({
	prevText:"<",
	nextText:">"
});

// Flippers
$(".flipper").click(function() {  //use a class, since your ID gets mangled
	$(this).toggleClass("rotated");      //add the class to the clicked element
});


// 100% videos
$(".media-element-full").fitVids({ customSelector: "iframe[src^='http://fast.wistia.net']"});

// Expanding tables
$('.footable').footable();

// Quiz!
$.quiz();

$(".switch").click(function () {
	$(".switchtext").toggle();
});

$('.tooltip').tooltipster({
	maxWidth : 280
});

$(".end-article").dotdotdot();


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