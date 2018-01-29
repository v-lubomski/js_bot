var url = 'https://api.telegram.org/bot' + token + '/';

$.ajax({
    url: url + 'getUpdates',
    type: 'GET',
    async: false,
    dataType: 'json',
    success: function (response) {
        console.log('successResponse', response);
    },
    error: function (jqXHR, textStatus) {
        console.log('errorResponse ' + textStatus);
    }
});
