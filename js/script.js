/* Author:

*/
var scrollfire = (function() {
  var scrollorama;
  return function() {
    scrollorama = $.scrollorama({
      blocks: '.scrollblock',
      enablePin:false
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
    //set drop scroll
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
    scrollorama.animate('#announcement',
      {
        delay:0,
        duration:300,
        property:'top',
        start: announceTop.top,
        end:725
      }
    );
    var liftTop = $('#lift').position();
    scrollorama.animate('#lift',
      {
        delay:0,
        duration:300,
        property:'top',
        start:liftTop.top,
        end:0
      }
    );
    return scrollorama;
  };
})();

$(window).resize(function(){

  //reset all the stuff scrollorama sets
  $('#scroll-wrap').remove();
  $('#announcement, #lift, #drop').removeAttr('style');
  $(window).unbind('scroll');

  if (Modernizr.mq('only all and (min-width: 768px)')){
    scrollfire();
  }else{
    console.log('below 768');
  }
   //grippy handle for touch
  $('.draggy').height($('#map-stuff').height());
});

$(document).ready(function() {

  $(window).resize();

});



