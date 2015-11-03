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
        output += '<h3><a href="' + val.url + '">' + val.title + '</a></h3>';
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
  $('body').css({
    background: '#3d566e'
  });
  $('#search-input').focus();
}

function moveupInputbox() {
  $('#results-container').css({
    marginTop: '50px',
    opacity: '1'
  });
  $('.inputbox').css({
    top: '15vh'
  });
}

function closeSearch() {
  $('.body').show();
  $('#search-container').hide();
  $('body').css({
    background: 'transparent'
  });
}

$('#search-input').on('keyup', moveupInputbox);
$('.searchBotton').on('click', openSearch);
$('.close').on('click', closeSearch);

function notifyShow() {
	$('.notify').removeClass('notifyShow');
}

$('form.contact').on('submit', function() {
		var infor = $(this),
				url = infor.attr('action'),
				type = infor.attr('method'),
				data = {};
		infor.find('[name]').each(function(index, value) {
				var infor = $(this),
						name = infor.attr('name'),
						valu = infor.val();
				data[name] = valu;
		});
		$.ajax({
				url: url,
				method: type,
				data: data,
				dataType: 'json',
				success: function(response) {
						$('.notify').addClass('notifyShow');
						$('.notify').append('<span><i class="fa fa-paper-plane-o fa-2x"></i></span> <p>Your message was send successfully</p>');
						setTimeout(notifyShow, 5000);
				},
				error: function(response) {
						$('.notify').addClass('notifyShow');
						$('.notify').append('<span><i class="fa fa-exclamation-triangle fa-2x"></i></span> <p>your message could not be sent</p>');
						setTimeout(notifyShow, 5000);
				}
		});
		return false;
});

});
