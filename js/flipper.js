// Flipper control
$(document).ready(function() {
    $('.flipper').click(function(){
	    console.log('flipper clicked');
	    console.log($(this));
	    $(this).toggleClass('rotated');
    });
});