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
            $('form.contact').find('input[type=text], input[type=email], textarea').val('');
            $('.notification h3').text('Your message was sent successfully.');
            $('.notification').addClass('noti-on');
            setTimeout(function() {
                $('.notification').removeClass('noti-on');
            }, 5000);
        },
        error: function(response) {
            $('.notification h3').text('your message was not sent');
            $('.notification').addClass('noti-on-error');
            setTimeout(function() {
                $('.notification').removeClass('noti-on-error');
            }, 5000);
        }
    });
    return false;
});