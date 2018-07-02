
/*
================================================================================

  Common

================================================================================
*/


'use strict';

//
// Open/Close side menu
//
$('.side-menu-btn').click(function() {
  
  var $sidemenu = $('.side-menu');
  $sidemenu.toggle(100);
});

if($( window ).width()  < 850){
  $('.table-container').width($( window ).width() - 20);
}

$( window ).resize(function() {
  if($( window ).width()  < 850){
    $('.table-container').width($( window ).width() - 20);
  }
  $('main').css('min-height', ($( window  ).height() - $( 'header'  ).height() - $( 'footer'  ).height() -6) +'px');
});

$('main').css('min-height', ($( window  ).height() - $( 'header'  ).height() - $( 'footer'  ).height()-6) +'px');

$('.tabcontent').hide();
$('.tabcontent').first().show();
$('.tabs > a').click(function(){
  var value = $(this).attr('data-value');
  $('.tabs > a').removeClass("selected");
  $(this).addClass("selected");
  $('.tabcontent').hide();
  $('.' + value).show();
});
