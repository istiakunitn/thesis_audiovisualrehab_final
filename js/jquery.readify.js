var currentX = 0;
var currentY = 0;
var oldX = $(window).height()/2;
var oldY = $(window).width()/2;
var gap = 30;
var speak = true
$.fn.readify = function() {
    $me = $(this);
    /*$me.mousemove(function( event ) {
        currentX = event.pageX;
        currentY = event.pageY;
        //console.log('.....', currentX, '....', currentY);
        if (currentY + gap < oldY) {
            console.log('Up');
            if(speak){
                responsiveVoice.cancel();
                responsiveVoice.speak('Up');
            }
            oldY = currentY;

        }else if (currentY - gap > oldY) {
            console.log('Down');
            if(speak){
                responsiveVoice.cancel();
                responsiveVoice.speak('Down');
            }
            oldY = currentY;

        }
        if (currentX + gap < oldX) {
            console.log('Left');
            if(speak){
                responsiveVoice.cancel();
                responsiveVoice.speak('Left');
            }
            oldX = currentX;

        }else if (currentX - gap > oldX) {
            console.log('Right');
            if(speak){
                responsiveVoice.cancel();
                responsiveVoice.speak('Right');
            }
            oldX = currentX;

        }
    });*/
    $me.find('h1,h2,h3,h4,h5').hover( function(){
        console.log('Heading ' + $(this).text());
        speak = false;
        responsiveVoice.cancel();
        responsiveVoice.speak('Heading ' + $(this).text());
    }, function(){
        responsiveVoice.cancel();
        speak = true;
    } );
    
    $me.find('a').hover( function(){
        console.log('Button ' + $(this).text());
        speak = false;
        responsiveVoice.cancel();
        responsiveVoice.speak('Button ' + $(this).text());
    }, function(){
        responsiveVoice.cancel();
        speak = true;
    } );
    
    $me.find('p').hover( function(){
        console.log('Text ' + $(this).text());
        speak = false;
        responsiveVoice.cancel();
        responsiveVoice.speak('Text ' + $(this).text());
    }, function(){
        responsiveVoice.cancel();
        speak = true;
    } );
};
