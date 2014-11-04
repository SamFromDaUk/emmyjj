$(document).ready(function() {
    var window = $(self),
        body = $('body'),
        timer;

    window.resize(function() {
        var width = $(this).width();

        timer && clearTimeout(timer);

        timer = setTimeout(function() {
            body.removeClass('bs-xs bs-sm bs-md bs-lg');

            switch(true) {
                case width < 768:
                    body.addClass('bs-xs');
                    break;
                case width < 991:
                    body.addClass('bs-sm');
                    break;
                case width < 1199:
                    body.addClass('bs-md');
                    break;
                case width >= 1200:
                    body.addClass('bs-lg');
                    break;
            }
        });
    });

    window.trigger('resize');

    $('.contact form').on('submit', function(event) {
        event.preventDefault();

        EmmyJJ.Contact.send($(this));
    });
});

(function() {
    var EmmyJJ = {
        Contact: {
            pageStart: +(new Date()),

            send: function(form) {
                var params = form.serialize(),
                    alert = form.find('.alert');

                form.attr('disabled', 'disabled');
                form.find('button').attr('disabled', 'disabled');
                alert.removeClass('hide').text('Sending...');

                $.ajax({ url: 'api', type: 'POST', data: params })
                    .done(function(response) {
                        alert.removeClass('alert-info alert-danger').addClass('alert-success').text(JSON.parse(response).message);
                    })
                    .fail(function(response) {
                        alert.removeClass('alert-info alert-success').addClass('alert-danger').text(JSON.parse(response.responseText).message);
                        form.removeAttr('disabled');
                        form.find('button').removeAttr('disabled');
                    });
            }
        }
    };

    window.EmmyJJ = EmmyJJ;
})();