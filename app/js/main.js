new WOW().init();


$(document).ready(function() {

	$('.pageview').css('margin-top', '0');

	$('a').click(function() {

		event.preventDefault();

		newLocation = this.href;

		$('.pageview').css('margin-top', '100vh').delay(50).fadeOut( 50, newpage );

	});

	function newpage() {

		window.location = newLocation;

	}

});