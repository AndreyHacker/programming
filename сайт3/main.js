$(document).ready(function () {
    if (window.screen.width >= 1920) {
        $('li').css('margin-left', '10px');
        $('li').css('margin-right', '10px');
    }


    var audio = new Audio();
    audio.src = "info/audio/fon.mp3";

    audio.loop = 100;

    audio.autoplay = true;
    var pira = new Audio();
    pira.src = "info/audio/pirati.mp3";
    pira.loop = 100;

    function audiopirati() {
        audio.autoplay = true;
        audio.pause();
        pira.play();
    }

    $('input[name="on"]').click(function () {
        $('input[name="on"]').hide();

        $('input[name="off"]').show();
        audio.pause();
    });
    $('input[name="off"]').click(function () {
        $('input[name="off"]').hide();
        $('input[name="on"]').show();
        audio.play();
    });


    $('input[name="onp"]').click(function () {
        $('input[name="onp"]').hide();

        $('input[name="offp"]').show();
        pira.pause();
    });
    $('input[name="offp"]').click(function () {
        $('input[name="offp"]').hide();
        $('input[name="onp"]').show();
        pira.play();
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });
    $('#scroller').click(function () {
        $('body,html').animate({scrollTop: 0}, 400);
        return false;
    });
});