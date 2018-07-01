
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

$('.table-container').width($( window ).width() - 20);

$( window ).resize(function() {
  $('.table-container').width($( window ).width() - 20);
});

$('.tabcontent').hide();
$('.tabcontent').first().show();
$('.tabs > a').click(function(){
  var value = $(this).attr('data-value');
  $('.tabs > a').removeClass("selected");
  $(this).addClass("selected");
  $('.tabcontent').hide();
  $('.' + value).show();
});
