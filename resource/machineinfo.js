$(function(){
  var toc = $('<div id="toc"><ul></ul></div>');
  $('.tag-machineinfo h2').map(function(){
    return $('<li><a href="#' + this.id + '">' + this.innerHTML + '</a></li>').get(0);
  }).appendTo($('ul', toc));
  $('.tag-machineinfo h1').after(toc);
});
