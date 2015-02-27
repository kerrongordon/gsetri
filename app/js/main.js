'use strict';



jQuery(document).ready(function($){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		
		$('.navbar').css('margin', '0px');
		$(window).bind('scroll', function() {
		    if ($(window).scrollTop() > 250 ) {
		        $('.navbar').addClass('gototop animated fadeInDown');
		     }
		    else {
		        $('.navbar').removeClass('gototop animated fadeInDown');
		    }
		});

		//$('.page-head-bg').remove();

		var images = $('.page-head-bg');
		  $.each(images, function() {
		    $(this).removeAttr("src");
		  });

	} else {

	}
});