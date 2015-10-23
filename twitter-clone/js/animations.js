$(document).ready(function () {

    $('#tweet-controls').hide();

    $('.tweet-compose').focus(function () {
        $('.tweet-compose').css('height', '5em');
        $('#tweet-controls').show();

        var charCount = parseInt($('#char-count').text());
//console.log(charCount);

        $('.tweet-compose').keydown(function(key) {
            if (key.keyCode !== 8) {
                charCount -= 1;
                $('#char-count').text(charCount.toString());
            } else if (charCount < 140 && key.keyCode === 8) {
                charCount += 1;
                $('#char-count').text(charCount.toString());
            }
//figure out how to delete properly
            
            if (charCount <= 10) {
                $('#char-count').css('color', 'red');
            } else {
                $('#char-count').css('color', '#999');
            }
            
            if (charCount < 0) {
                $('#tweet-submit').attr('disabled', true);
            } else {
                $('#tweet-submit').attr('disabled', false);
            }

        })

    });


})