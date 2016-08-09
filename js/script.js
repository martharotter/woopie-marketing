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

    $(window).scroll(function() {
        if ($(this).scrollTop() < 100) {
            $("#top-logo").removeClass("showme");
        }
        else {
            $("#top-logo").addClass("showme");
        }
    });

    $('.flexslider').flexslider({
        animation: "slide",
        slideshowSpeed: 5000
    });

    $('a[rel*=leanModal]').leanModal({ top: 100 });		
});


// google analytics 
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments);},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-28531592-1', 'woop.ie');
ga('require', 'displayfeatures');
ga('send', 'pageview');

$('#purechat-name-submit').on('click', function() {
  ga('send', 'event', 'button', 'click', 'submit_purechat_request');
});
$('#submit_beta').on('click', function() {
  ga('send', 'event', 'button', 'click', 'submit_beta_form');
});
$('#downloadSpotifyEpub').on('click', function() {
  ga('send', 'event', 'download', 'click', 'download_spotify_epub');
});
$('#downloadSpotifyMobi').on('click', function() {
  ga('send', 'event', 'download', 'click', 'download_spotify_mobi');
});
$('#downloadMovieEpub').on('click', function() {
  ga('send', 'event', 'download', 'click', 'download_movies_epub');
});
$('#downloadMovieMobi').on('click', function() {
  ga('send', 'event', 'download', 'click', 'download_movies_mobi');
});

// facebook connect
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1&appId=315222535232576";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// chat widget
window.intercomSettings = {
  app_id: "7tqlm6sc"
};
(function(){
  var w=window;
  var ic=w.Intercom;
  if(typeof ic==="function"){
    ic('reattach_activator');
    ic('update',intercomSettings);
  } else {
    var d=document;
    var i=function(){
      i.c(arguments); 
    };
    i.q=[];
    i.c=function(args){
      i.q.push(args);
    };
    w.Intercom=i;
    function l() {
      var s=d.createElement('script');
      s.type='text/javascript';
      s.async=true;
      s.src='https://widget.intercom.io/widget/7tqlm6sc';
      var x=d.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s,x);
    }
    if(w.attachEvent){
      w.attachEvent('onload',l);
    } else {
      w.addEventListener('load',l,false);
    }
  }
})();

// the modal window html
var logos = '<h2>Looking for our Logo? <span class="close btn btn-info">x</span></h2>';
logos += '<p>View our press page for high-res downloads of our logos and images</p>';
logos += '<a href="press.html" class="btn btn-success getlogos">Get Logos and Images</a>';


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

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
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

	//Validation Starts Here
	$('#signup-form').submit(function(event) {
		event.preventDefault();
		if($('#enterVerify').val() == $('#verifyNumHidden').val() ) {
            url = "https://app.woop.ie/customers/";
            var xhr = createCORSRequest('POST', url);
            if (!xhr) {
              throw new Error('CORS not supported');
            }
            xhr.send($(this).serialize());
		}
		else {
			alert("Please Enter Correct Verification Number");
			randomgen();
			$('#enterVerify').select();
			$('#enterVerify').focus();
			return false;
		}
	});
});
