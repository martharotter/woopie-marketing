
$(window).scroll(function() {
    if ($(this).scrollTop() < 100) {
        $("#top-logo").removeClass("showme");
    }
    else {
        $("#top-logo").addClass("showme");
    }
});

