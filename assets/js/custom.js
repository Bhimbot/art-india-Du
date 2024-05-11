  /*--------------------- Copyright (c) 2024 -----------------------
[Master Javascript]
Project: Project Name
Version: 1.0.0
-------------------------------------------------------------------*/
(function ($) {
    "use strict";
  
    // Ready Function
    jQuery(document).ready(function ($) {
      var $this = $(window);

      $('.main_banner_art').owlCarousel({
        loop:true,
        smartSpeed: 2000,
        margin:10,
        autoplay:true,
        autoplayTimeout:5000,  
        // nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
      $('.service_slider').owlCarousel({
        loop:true,
        smartSpeed: 2000,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,  
        // nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
  

      $('.feedback_testimonal').owlCarousel({
        loop:true,
        smartSpeed: 2000,
        margin:10,
        autoplay:true,
        autoplayTimeout:4000,  
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
  

      // Fixed Header
      $(window).scroll(function(){
        if ($(window).scrollTop() >= 50) {
            $('.nav_class').addClass('fixed');
        }
        else {
            $('.nav_class').removeClass('fixed');
        }
      });

      // Menu toggle
      $('.menu_open').on('click',function () {
        $('.right_button>ul,.phone_menu').toggleClass('clicked');
      });
      
    });
  })();
  

  var counterValue = document.querySelector("#counter-value");
var counterIncrement = document.querySelector("#counter-increment");
var counterDecrement = document.querySelector("#counter-decrement");
var count = 0;

this.counterIncrement.addEventListener('click', () => {
  this.count++
  this.counterValue.setAttribute("value", count);
});

this.counterDecrement.addEventListener('click', () => {
  this.count--
  this.counterValue.setAttribute("value", count);
});