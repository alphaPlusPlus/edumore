
/*
================================================================================

  Common

================================================================================
*/


'use strict';


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  Navigation
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

//
// Open/Close navigation
//
$('#hamburger-btn').click(function() {
  
  var $nav = $('#nav');

  if ($nav.hasClass('js-opened')) {

    $nav.removeClass('js-opened');

  } else {

    $nav.addClass('js-opened');

  }
});

//
// Open/Close side menu
//
$('.side-menu-btn').click(function() {
  
  var $sidemenu = $('.side-menu');
  $sidemenu.toggle(100);
});