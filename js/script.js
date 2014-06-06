$(document).ready(function() {
	$('#logo-img').bind('contextmenu',function(e) {
		// check if right button is clicked
		if(e.button === 2) {
			showPressModal();
			e.preventDefault();
		}
	});
	
	// when clicking on the shadow or on the close button
	$('#shadow, .close').live('click', function() {
		hidePressModal();
	});
	
	// open links with rel="external" in a new window or tab
	$('a[rel="external"]').click( function() {
        window.open( $(this).attr('href') );
        return false;
    });
});

// the modal window html
var logos = '<h2>Looking for our Logo? <span class="close btn btn-info">x</span></h2>';
logos += '<p>View our press page for high-res downloads of our logos and images</p>';
logos += '<a href="press.html" class="btn btn-success getlogos">Get Logos and Images</a>'


function showPressModal() {
	// if no shadow is visible then no modal is displayed
	if($('#shadow').length === 0) {
		$('#home-banner').append('<div id="press-modal"></div>');
		$('press').prepend('<div id="shadow"></div>');
		$('#logo-modal').hide();
		$('#shadow').hide();
		if(logos !== undefined) {
			$('#press-modal').append(logos);
			$('#shadow').fadeIn();
			$('#press-modal').slideDown();
		}
	}
}

function hidePressModal() {
	$('#shadow').fadeOut(400, function() {
		$(this).remove();
	});
	$('#press-modal').slideUp(400, function() {
		$(this).remove();
	});
}

// SPam
$(document).ready(function() {
	function randomgen()
	{
    var rannumber='';
		for(ranNum=1; ranNum<=2; ranNum++){
			rannumber+=Math.floor(Math.random()*10).toString();
		}
		$('#verifyNum').html(rannumber);
		$('#verifyNumHidden').val(rannumber);
	}
	randomgen();
	
	//Validation Starts Here    
	$('#contact-form').submit(function() {
		if($('#enterVerify').val() == $('#verifyNumHidden').val() ) {
			$('form').attr('action', 'https://docs.google.com/spreadsheet/formResponse?formkey=dFdpcVMyYTVCSzA3bzY2WkRjX05UOWc6MQ&ifq');
			return true;
		}
		else
		{
			alert("Please Enter Correct Verification Number");
			randomgen();
			$('#enterVerify').select();
			$('#enterVerify').focus();
			return false;
		}
	});
	
	//Validation Starts Here    
	$('#alpha-form').submit(function() {
		if($('#enterVerify').val() == $('#verifyNumHidden').val() ) {
			$('form').attr('action', 'https://docs.google.com/spreadsheet/formResponse?formkey=dGJFbEVHTTgwWXBoTmxCUXUxdFlZb1E6MA');
			return true;
		}
		else
		{
			alert("Please Enter Correct Verification Number");
			randomgen();
			$('#enterVerify').select();
			$('#enterVerify').focus();
			return false;
		}
	});
});
