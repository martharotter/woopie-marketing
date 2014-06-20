$(window).bind("load resize", function() {
    var windowWidth = $(window).width(); //retrieve current window width
    var windowHeight = $(window).height(); //retrieve current window height
    $('#debug-window').html("&#8596; " + windowWidth + "px - " + Math.round(windowWidth/16) + "em &nbsp;&nbsp;&nbsp;&nbsp; &#8597; " + windowHeight + "px - "  + Math.round(windowHeight/16) + "em"); 
});

$(window).mousemove(function(e){
	var x = e.pageX;
	var y = e.pageY;
    $('#debug-coor').html("X: " + x + " Y: " + y);
});