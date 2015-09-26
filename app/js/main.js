'use strict';

jQuery(document).ready(function($){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		
		$('.navbar').css('margin', '0px');
		$(window).bind('scroll', function() {
		    if ($(window).scrollTop() > $('.hero-bg').height() ) {
		        $('#navbar').addClass('gototop animated fadeInDown');
		     }
		    else {
		        $('#navbar').removeClass('gototop animated fadeInDown');
		    }
		});
		$('.page-head-bg').css({'top': '-70%' });
	} else {
		/*$(window).scroll(function() {
		  var windowScroll = $(this).scrollTop()/1.5;
		  $('.page-head-bg').css({
		    'top': '-' + windowScroll + 'px'
		  });
		});*/
	}
    $('#Contact-hide').hide();
});