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
      delay:0,
      duration:800,
      property:'background-position-x',
      start:$(window).width(),
      end:0
    }
  );
  scrollorama.animate('#biker-2',
    {
      delay:0,
      duration:500,
      property:'background-position-x',
      start:$(window).width(),
      end:0
    }
  );
  scrollorama.animate('#biker-3',
    {
      delay:50,
      duration:500,
      property:'background-position-x',
      start:$(window).width(),
      end:0
    }
  );
  scrollorama.animate('#lift',
    {
      delay:0,
      duration:300,
      property:'top',
      start:263,
      end:0
    }
  );


  console.log('hello');
});






