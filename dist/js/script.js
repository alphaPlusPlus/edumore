"use strict";$(".side-menu-btn").click(function(){$(".side-menu").toggle(100)}),$(".table-container").width($(window).width()-20),$(window).resize(function(){$(".table-container").width($(window).width()-20)});