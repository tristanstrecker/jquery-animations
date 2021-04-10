// FadeIn - using CSS for initial hiding
// $(document).ready(function () {
//   $('div.hidden').fadeIn(4500).removeClass('hidden');
// });

// Fade in using jQuery

// Main text
$(function(){
    $('.main-text').hide().fadeIn(1500)
})

// Fade in secondary text after main text using delay
// NOTE: order of delay() matters
// FadeTo saves space for the text while fadeIn hides the space
// initially before expanding as the fade occurs
$(function(){
    $('.sub-text').hide().delay(1000).fadeTo(1500, 1)
})

// Using animate to slide text across the screen and hide to
// move sub-text up after main text disappears
$(document).ready(function() {
    $('.main-text').click(function(){
        $('.main-text').animate({left: '200px', opacity: '0',}, 1000).hide(1000)
    })
})

// Toggle sub-text fading in and out
$(document).ready(function() {
    $('#toggle').click(function(){
        $('.sub-text').fadeToggle(1000)
    })
})

// Toggle text sliding
$(document).ready(function() {
    $('#slide').click(function(){
        $('.sub-text').slideToggle(1500)
    })
})

// FadeOut and FadeIn without buttons moving up
$(function() {
    $('#fadeoutin').click(function(){
        if ($('.sub-text').css('opacity') === '0') {
        $('.sub-text').animate({opacity: '1'}, 1000);
    } else {
        $('.sub-text').animate({opacity: '0'}, 1000)
    }
})
})

// Dropping a ball
$(function(){
    $('#drop').click(function(){
        $('#drop').animate({top: '300px', opacity: '0'}, 1000)
    })
})

// Bouncing a ball
$(function(){
    $('#bouncing').click(function(){
        $('#bouncing').animate({top: '200px'}, 450);
        $('#bouncing').animate({top: '100px'}, 400);
        $('#bouncing').animate({top: '200px'}, 350);
        $('#bouncing').animate({top: '150px'}, 300);
        $('#bouncing').animate({top: '200px'}, 250);
        $('#bouncing').animate({top: '175px'}, 200);
        $('#bouncing').animate({top: '200px'}, 150);
    })
})

// Resize
$(function(){
    $('#sizing').click(function(){
        if ($('#sizing').css('height') !== '175px') {
            $('#sizing').animate({height: '175px', width: '175px'}, 450);
        } else {$('#sizing').animate({height: '100px', width: '100px'}, 450)}
    })
})

// Ping
$(function(){
    $('button.ping-btn').click(function(){
        $('div#ping').css({border: "2px solid purple", zIndex: '-1'});
        $('div#ping').animate({opacity: '0.3', height: '113px', width: '113px', marginLeft: '-12px', marginTop: '-12px'}, 100);
        $('div#ping').animate({opacity: '0.25', height: '115px', width: '115px', marginLeft: '-13px', marginTop: '-13px'}, 200);
        $('div#ping').animate({opacity: '0.1', height: '120px', width: '120px', marginLeft: '-15px', marginTop: '-15px'}, 300);
        $('div#ping').animate({opacity: '0'}, 400).promise().then(function(){$('div#ping').css({border: "2px solid rgb(75, 7, 75)", height: '110px', width: '110px', marginLeft: '-11px', marginTop: '-11px'});})
        
    })
})