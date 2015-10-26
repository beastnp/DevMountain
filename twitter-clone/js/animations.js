$(document).ready(function () {

    $('#tweet-controls').hide();

    $('.tweet-compose').focus(function () {
        $('.tweet-compose').css('height', '5em');
        $('#tweet-controls').show();

        var charCount = parseInt($('#char-count').text());
        //console.log(charCount);

        $('.tweet-compose').keydown(function (key) {
            if (key.keyCode !== 8) {
                charCount -= 1;
                $('#char-count').text(charCount.toString());
            } else if (charCount < 140 && key.keyCode === 8) {
                charCount += 1;
                $('#char-count').text(charCount.toString());
            }
            //figure out how to delete properly; possibly use this var tweetText = $('.tweet-compose').val()

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


    $('#tweet-submit').on('click', function (ev) {
        ev.preventDefault();
        var tweetText = $('.tweet-compose').val();
        //        console.log(tweetText);

        var tweet = $('.tweet:first').clone();
        tweet.prependTo('#stream');

        $('.tweet:first .avatar').attr('src', 'img/alagoon.jpg');
        $('.tweet:first .fullname').text('Shia Le Boouf');
        $('.tweet:first .username').text('@thebigshia');
        $('.tweet:first .tweet-text').text(tweetText);
        $('.tweet:first .num-retweets').text('0');
        $('.tweet:first .num-favorites').text('0');
        $('.tweet:first .tweet-compose').attr('placeholder', 'Reply to @thebigshia');

        charCount = 140;
        $('#char-count').text(charCount.toString());
        $('.tweet-compose').val("");

        $('.tweet').hover(function () {
            $('.tweet-actions').show();
        }, function () {
            $('.tweet-actions').hide();
            $('.tweet').click(function () {
                $('.stats, .reply').slideToggle('slow');
            });
        });

    });

    $('.stats, .reply').hide();

    $('.tweet').hover(function () {
        $('.tweet-actions').show();
    }, function () {
        $('.tweet-actions').hide();
    });

    $('.tweet').click(function () {
        $('.stats, .reply').slideToggle('slow');
    });








});