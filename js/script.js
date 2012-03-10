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

  scrollorama.animate('#biker',{ duration: 50, property:'left', start:-100, end:0 });


  console.log('hello');
});






