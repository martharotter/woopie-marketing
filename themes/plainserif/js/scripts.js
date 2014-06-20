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
     wipeLeft: function() { window.location = $('.prev').attr('href');  },
     wipeRight: function() { window.location = $('.next').attr('href'); },
     wipeUp: function() { },
     wipeDown: function() { },
     min_move_x: 100,
     min_move_y: 100,
     preventDefaultEvents: false
  });
  
   $("h1.bullet-heading").lettering('words');
   
   $("h1.date-heading").lettering('words');
  
});

/* Side Panel */

(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover)}})(jQuery);

function collapsePanel() {
    if (rightpanel) {
        rightpanel = false;
        $('html').unbind('click');
        $('#rightPanel').animate({width: '0px'}, 666,
            function() {
                $('#rightPanel').toggleClass('expanded');
            }
        )
        $('#rightPanel').click(expandPanel);
    }
};

function expandPanel() {
    if (! (rightpanel)) {
        rightpanel = true;
        $('#rightPanel').unbind('click');
        $('#rightPanel').toggleClass('expanded');
        $('#rightPanel').animate({width: '180px'}, 666);
        $('html').click(collapsePanel);
    }
    return false;
};

var rightpanel = false;

$(document).ready(function() { 
    /* expandPanel on click - good for mobile devices without mouse */
    $('#rightPanel').click(expandPanel);
    /* show+hide panel on mouse hover */
    $('#rightPanel').hoverIntent({
        over: expandPanel,
        timeout: 700,
        out: collapsePanel
    });
});