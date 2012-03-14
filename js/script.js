/* Author:

*/

$(document).ready(function() {
  var scrollorama = $.scrollorama({
    blocks:'.scrollblock',
    enablePin:false
  });

  scrollorama.onBlockChange(function() {
    var i = scrollorama.blockIndex;
    $('#console')
      .css('display','block')
      .text('onBlockChange | blockIndex:'+i+' | current block: '+scrollorama.settings.blocks.eq(i).attr('id'));
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

  var liftTop = parseInt($('#lift').css('top').replace("px", ""), 10);

  scrollorama.animate('#lift',
    {
      delay:0,
      duration:300,
      property:'top',
      start:liftTop,
      end:250
    }
  );

  scrollorama.animate('#drop',
    {
      delay:0,
      duration:400,
      property:'top',
      start:70,
      end:600
    }
  );

  scrollorama.animate('#announcement',
    {
      delay:0,
      duration:300,
      property:'top',
      start:450,
      end:600
    }
  );

});






