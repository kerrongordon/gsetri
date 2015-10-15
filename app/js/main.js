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
	} else {

		
	}
    $('#Contact-hide').hide();

    

    function searchPosts(e) {
        var searchFiled = $('#search-input').val();
    var myExp = new RegExp(searchFiled, 'i');

    function loadJson(data) {
    var output = '<div class="updateSearch">';
    $.each(data, function(key, val) {
    if ((val.title.search(myExp) !== -1) || (val.author.search(myExp) !== -1)) {
    output += '<li class="text-left">';
    output += '<h3><a href="' +  val.url + '">' + val.title + '</a></h3>';
    output += '</li>';
    }
    });
    output += '</div>';
    $('#results-container').html(output);
    }
    $.getJSON('/search.json', loadJson);
    }

    $('#search-input').keyup(searchPosts);

    function openSearch(e) {
    e.preventDefault();
    $('#search-container').show();
    $('.body').hide();
    $('body').css({ background: '#3d566e' });
    $('#search-input').focus();
    }

    function moveupInputbox() {
    $('#results-container').css({ marginTop: '50px', opacity: '1' });
    $('.inputbox').css({ top: '15vh' });
    }

    function closeSearch() {
    $('.body').show();
    $('#search-container').hide();
    $('body').css({ background: 'transparent' });
    }

    $('#search-input').on('keyup', moveupInputbox);
    $('.searchBotton').on('click', openSearch);
    $('.close').on('click', closeSearch);

});


