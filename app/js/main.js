new WOW().init();


if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	$('.navbar').css("margin", "0px");
	$(window).bind('scroll', function() {
	    if ($(window).scrollTop() > 250 ) {
	        $('.navbar').addClass('gototop animated fadeInDown');
	     }
	    else {
	        $('.navbar').removeClass('gototop animated fadeInDown');
	    }
	});
} else {



}