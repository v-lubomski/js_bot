$(document).ready(function() {
    var url = 'https://api.telegram.org/bot' + token + '/';

    $.ajax({
        url: url + 'getUpdates',
        type: 'GET',
        async: false,
        dataType: 'json',
        success: function (response) {
            console.log('successResponse', response);
            $('#rawData').text(JSON.stringify(response, null, '  '));
            var result = response.result;
            for (var m in result) {
                renderMessage(result[m]);
            }
        },
        error: function (jqXHR, textStatus) {
            console.log('errorResponse ' + textStatus);
        }
    });

    function renderMessage(msgObj) {
        console.log(msgObj);
    }
});