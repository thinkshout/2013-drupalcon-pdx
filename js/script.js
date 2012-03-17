/* Author:

*/
var scrollfire = (function() {
  var scrollorama;
  console.log('scrollorama length: ' + scrollorama);
  return function() {
    if (scrollorama === undefined){
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
    } //if
    console.log('but we did hit scrollfire');
    scrollorama = null;
    console.log(scrollorama);
    return scrollorama;
  };
})();

$(window).resize(function(){
  var scrollfired;
  if (Modernizr.mq('only all and (min-width: 768px)')){
    //scrollfired = scrollfire();
    //scrollUpInDis('scrollblock');
    //$('.scrollblock').removeClass('scrollblock').addClass('resetScroll');

  }else{
    console.log('below 768');
    //scrollfired = scrollfire('.nothing');
    //$(window).unbind();
    //$(window).unbind('scrollorama');
    //$('#announcement').removeAttr('style');
  }
});

$(document).ready(function() {
  $(window).resize();

  var scrollEvents = $(window).data("events").scroll;
  // $.each(scrollEvents, function(key, handlerObj) {
  //   console.log(handlerObj.handler);
  // });

  //grippy handle for touch
  $('.draggy').height($('#map-stuff').height());

});




function scrollUpInDis(selector){

  console.log('fired scrollorama');



  //   scrollorama.onBlockChange(function() {

  //   });



  //   //var liftTop = parseInt($('#lift').css('top').replace("px", ""), 10);

}




