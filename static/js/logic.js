// FadeIn - using CSS for initial hiding
// $(document).ready(function () {
//   $('div.hidden').fadeIn(4500).removeClass('hidden');
// });

// Fade in using jQuery

// Main text
$(function(){
    $('.main-text').hide().fadeIn(4500)
})

// Fade in secondary text after main text using delay
// NOTE: order of delay() matters
// FadeTo saves space for the text while fadeIn hides the space
// initially before expanding as the fade occurs
$(function(){
    $('.sub-text').hide().delay(1000).fadeTo(4500, 1)
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
        $('.sub-text').animate({opacity: '1'}, 4000);
    } else {
        $('.sub-text').animate({opacity: '0'}, 3000)
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

// Pinging without extra plugin
$(function(){
        $('button.ping-btn').click(function(){
            if($('#ping').css('opacity') === '0') {
                $('div#ping').css({border: "2px solid purple", zIndex: '-1'});
                $('div#ping').animate({opacity: '0.9'}, 500);
                $('div#ping').delay(100).animate({opacity: '0'}, 600).promise().then(function(){
                    $('div#ping').css({border: "2px solid purple", height: '108px', width: '108px', marginLeft: '-10px', marginTop: '-10px'});
                    $('div#ping').animate({opacity: '0.7'}, 600);
                    $('div#ping').delay(50).animate({opacity: '0'}, 700).promise().then(function(){
                        $('div#ping').css({border: "2px solid purple", height: '112px', width: '112px', marginLeft: '-12px', marginTop: '-12px'});
                        $('div#ping').animate({opacity: '0.4'}, 700);
                        $('div#ping').delay(25).animate({opacity: '0'}, 800).promise().then(function(){
                            $('div#ping').css({border: "2px solid purple", height: '108px', width: '108px', marginLeft: '-10px', marginTop: '-10px'});
                        });
                });
            })
        }
    })
})

// var p = 0
// // Pinging with plugin from https://www.jqueryscript.net/animation/Simple-Pulsating-Circle-Animation-with-jQuery-jPulse-Plugin.html
// $(function(){
//     $('#ping').click(function(){
//         while (p<4) {
//             if($('#ping').css('opacity') === '0') {
//                 $('#ping').jPulse({color: '#684f82', speed: 3000, left: -5, top: -5, size: 150, interval: 1000});
//                 $('#ping').animate({opacity: '0.7'}, 500);
//                 $('#ping').animate({opacity: '0'}, 600)
//             } p++
//         }
//     })
// })
