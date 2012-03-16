/* Author:

*/
var firedScroll = false;
var scrollorama = null;

function scrollUpInDis(selector){
  console.log(selector);

  scrollorama = $.scrollorama({
    blocks: selector,
    enablePin:false
  });

  if(selector !== 'goaway' && firedScroll === false){
    console.log('running it all again');
    scrollorama.onBlockChange(function() {

    });

    scrollorama.animate('#biker-1',
      {
        delay:300,
        duration:1200,
        property:'background-position-x',
        start:$(window).width(),
        end:-100
      }
    );
    scrollorama.animate('#biker-2',
      {
        delay:200,
        duration:700,
        property:'background-position-x',
        start:$(window).width(),
        end:-100
      }
    );
    scrollorama.animate('#biker-3',
      {
        delay:350,
        duration:600,
        property:'background-position-x',
        start:$(window).width(),
        end:-100
      }
    );

    //var liftTop = parseInt($('#lift').css('top').replace("px", ""), 10);
    var liftTop = $('#lift').position();
    console.log(liftTop.top);

    scrollorama.animate('#lift',
      {
        delay:0,
        duration:300,
        property:'top',
        start:liftTop.top,
        end:0
      }
    );
    var announceTop = $('#announcement').position();
    console.log(announceTop);
    scrollorama.animate('#drop',
      {
        delay:0,
        duration:400,
        property:'top',
        start:$('#drop').position().top,
        end: announceTop.top - 100
      }
    );
    console.log(announceTop);
    scrollorama.animate('#announcement',
      {
        delay:0,
        duration:300,
        property:'top',
        start: announceTop.top,
        end:725
      }
    );

  }
  scrollorama = null;
}

$(window).resize(function(){
  var winWidth = $(this).width();
  console.log(winWidth);
  if (winWidth <= 768){
    //$('.scrollblock').removeClass('scrollblock').addClass('resetScroll');
    //console.log(scrollorama);
    scrollorama = null;
  }else if(!firedScroll){
    //scrollUpInDis('.scrollblock');
    firedScroll = true;
    console.log('fired scrollorama');
  }

});

$(document).ready(function() {
  $(window).resize();
  $(window).scroll(function(){

  });
  var winWidth = $(this).width();
  $('#draggy').height($('#map-stuff').height() - 150 - 10);

});






