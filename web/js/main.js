/*

    Template Name: Arubic - Responsive Bootstrap 5 Html Template;
    Template URI: http://hastech.company/
    Description: This is Bootstrap 5 html5 template
    Author: HasTech
    Author URI: http://hastech.company/
    Version: 1.0

*/


(function ($) {
	"use Strict";
/*---------------------------------
    1. Mean Menu Active
-----------------------------------*/
jQuery('.header-menu-area nav').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "991"
});
/*---------------------------------
	2. Header Top Dropdown Menu 
-----------------------------------*/
$( '.drodown-show > a' ).on('click', function(e) {
    e.preventDefault();
    if($(this).hasClass('active')) {
        $( '.drodown-show > a' ).removeClass('active').siblings('.ht-dropdown').slideUp()
        $(this).removeClass('active').siblings('.ht-dropdown').slideUp();
    } else {
        $( '.drodown-show > a' ).removeClass('active').siblings('.ht-dropdown').slideUp()
        $(this).addClass('active').siblings('.ht-dropdown').slideDown();
    }
}); 
/*-- DeopDown Menu --*/
$('.dropdown, .mega-menu').hide();
if( $(window).width() > 991 ) {
    $('.header-menu-area > nav > ul > li').hover(
      function() {
        if( $(this).children('ul').size() > 0 && $(this).children().hasClass('dropdown') || $(this).children().hasClass('mega-menu') ) {
            $(this).children().stop().slideDown(400);
        }
      }, function() {
        $(this).children('.dropdown, .mega-menu').stop().slideUp(300);
      }
    );
};
/*---------------------------- 
   3. Sidebar Search Active
-----------------------------*/
    function sidebarSearch() {
        var searchTrigger = $('li .sidebar-trigger-search'),
            endTriggersearch = $('button.search-close'),
            container = $('.main-search-active');
        
        searchTrigger.on('click', function() {
            container.addClass('inside');
        });
        
        endTriggersearch.on('click', function() {
            container.removeClass('inside');
        });
        
    };
    sidebarSearch();
/*---------------------------------
	4. Shopping Cart Toggle Active 
-----------------------------------*/
$( '.shoppingcart-search-item > ul > li > a' ).on('click', function(e) {
    e.preventDefault();
    if($(this).hasClass('active')) {
        $( '.shoppingcart-search-item > ul > li > a' ).removeClass('active').siblings('.header-cart,.currency-dropdown').slideUp()
        $(this).removeClass('active').siblings('.header-cart,.currency-dropdown').slideUp();
    } else {
        $( '.shoppingcart-search-item > ul > li > a' ).removeClass('active').siblings('.header-cart,.currency-dropdown').slideUp()
        $(this).addClass('active').siblings('.header-cart,.currency-dropdown').slideDown();
    }
});
/*---------------------------------
    5. Sticky Menu Active
-----------------------------------*/
$(window).scroll(function() {
if ($(this).scrollTop() >50){  
    $('.header-sticky').addClass("is-sticky");
  }
  else{
    $('.header-sticky').removeClass("is-sticky");
  }
});
    
    window.setTimeout(function () {

        // $('.header-sticky').addClass("is-sticky");
        var video = document.querySelector('audio');
        video.muted = true;


        video.play()
        
        
    }, 5);
/*----------------------------
    6. Owl Active
------------------------------ */
/*----------
    6.1 Hero Slider Active
------------------------------*/
$('.hero-slider').owlCarousel({
    nav: true,
    loop: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplay: false,
    responsive: {
        0: {
            items: 1
        }
    }
})
/*------- 
    6.2 Product Slider Active 
----------------------------------*/
 $('.product-slider').owlCarousel({
        smartSpeed: 1000,
        nav: true,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    })
/*---------
    6.3 Product Slider 5 Active Home-2
----------------------------------*/
 $('.product-slider-5').owlCarousel({
        smartSpeed: 1000,
        nav: true,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 5
            },
            1200: {
                items: 5
            }
        }
    })
/*----------
    6.4 New Product Slider Active 
----------------------------------*/
 $('.new-product-slider').owlCarousel({
        smartSpeed: 1000,
        nav: true,
        margin: 30,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })
/*---- 
    6.5 On Sale Product Slider Active 
-------------------------------------------*/
 $('.on-sale-product-slider').owlCarousel({
        smartSpeed: 1000,
        nav: true,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
})
/*--------
    6.6 On Sale Product 4 Slider Active Home-2
---------------------------------------------*/
 $('.on-sale-product-slider-4').owlCarousel({
        smartSpeed: 1000,
        nav: true,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
})
                                         
/*-------- 
    6.7 Testimonial Active 
----------------------------------*/
 $('.testimonial-slider').owlCarousel({
        smartSpeed: 1000,
        nav: false,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
})                                         
/*------------- 
    6.8 Blog Active 
----------------------------------*/
$('.blog-slider')
        .on('changed.owl.carousel initialized.owl.carousel', function (event) {
            $(event.target)
                .find('.owl-item').removeClass('last')
                .eq(event.item.index + event.page.size - 1).addClass('last');
        }).owlCarousel({
        smartSpeed: 1000,
        nav: false,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
})                                     
/*--------
    6.9 Blog Slider 1 Active Home-2 
----------------------------------*/
 $('.blog-slider-1').owlCarousel({
        smartSpeed: 1000,
        nav: true,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
})
/*--------
   6.10 Brand Active
----------------------------------*/
 $('.brand-active').owlCarousel({
        smartSpeed: 1000,
        nav: true,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
        responsive: {
            0: {
                items: 2
            },
            450: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
}) 
/*--------------------------------
    6.11 Shop Category Active
----------------------------------*/
 $('.category-slider').owlCarousel({
        smartSpeed: 1000,
        nav: false,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
}) 
/*----------------------------------- 
    7. Single Product Side Menu Active 
--------------------------------------*/  
$('.single-slide-menu').slick({
		prevArrow: '<i class="fa fa-angle-left"></i>',
		nextArrow: '<i class="fa fa-angle-right slick-next-btn"></i>',
        slidesToShow: 3,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
	});
$('.modal').on('shown.bs.modal', function (e) {
    $('.single-slide-menu').resize();
})
    
$('.single-slide-menu a').on('click',function(e){
      e.preventDefault();
     
      var $href = $(this).attr('href');
     
      $('.single-slide-menu a').removeClass('active');
      $(this).addClass('active');
     
      $('.product-details-large .tab-pane').removeClass('active show');
      $('.product-details-large '+ $href ).addClass('active show');
     
  })
    
/*----------------------------------
	8. Instafeed active 
------------------------------------*/
if($('#Instafeed').length) {
    var feed = new Instafeed({
        get: 'user',
        userId: 6665768655,
        accessToken: '6665768655.1677ed0.313e6c96807c45d8900b4f680650dee5',
        target: 'Instafeed',
        resolution: 'low_resolution',
        limit: 6,
        template: '<li><a href="{{link}}" target="_new"><img src="{{image}}" /></a></li>',
    });
    feed.run(); 
}
    
new WOW().init();
/*----------------------------------
   9. ScrollUp Active
-----------------------------------*/
$.scrollUp({
    scrollText: '<i class="fa fa-angle-double-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
});
/*------------------------------ 
    10. Cart Plus Minus Button
---------------------------------*/
 $(".cart-plus-minus").append('<div class="dec qtybutton"><i class="zmdi zmdi-chevron-down"></i></div><div class="inc qtybutton"><i class="zmdi zmdi-chevron-up"></i></div>');
  $(".qtybutton").on("click", function() {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.hasClass('inc')) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
       // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
        } else {
        newVal = 0;
      }
      }
    $button.parent().find("input").val(newVal);
  });
/*------------------------------ 
    11. Nice Select Active
---------------------------------*/
$('select').niceSelect();
/*------------------------------
    12. Category menu Active
------------------------------*/
    $('#cate-toggle li.has-sub>a,#cate-mobile-toggle li.has-sub>a,#shop-cate-toggle li.has-sub>a').on('click', function () {
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp();
        } else {
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();
        }
    });
    $('#cate-toggle>ul>li.has-sub>a').append('<span class="holder"></span>');

 /*--- showlogin toggle function ----*/
    $('#showlogin').on('click', function() {
        $('#checkout-login').slideToggle(900);
    });

 /*--- showlogin toggle function ----*/
    $('#showcoupon').on('click', function() {
        $('#checkout_coupon').slideToggle(900);
    });
/*--- showlogin toggle function ----*/
    $('#cbox').on('click', function() {
        $('#cbox-info').slideToggle(900);
    });

 /*--- showlogin toggle function ----*/
    $('#ship-box').on('click', function() {
        $('#ship-box-info').slideToggle(1000);
    });
/* --------------------------------------------------------
	FAQ-accordion
* -------------------------------------------------------*/ 
  $('.card-header a').on('click', function() {
    $('.card').removeClass('actives');
    $(this).parents('.card').addClass('actives');
  });
/* --------------------------------------------------------
	13. Venobox Active
* -------------------------------------------------------*/  
  $('.venobox').venobox({
        border: '10px',
        titleattr: 'data-title',
        numeratio: true,
        infinigall: true
    });   

})(jQuery);