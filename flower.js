//  header js query
$(function(){
$(".nav_menu ul.drop_down").before('<div class="mobile-trigger"><i></i></div>')
$('.mobile-trigger').click(function(){
    $(this).toggleClass('menu-open')
    $('header').toggleClass('mobile-open')
    $('.drop_down').toggleClass('dropdown-active')
    $('.drop_down').slideToggle()
});
});


$(function(){
    $('header .nav_menu ul li').each(function(){
        var text= $(this).children('a').text();
        $(this).children('a').attr("data-title",text);
        $(this).children('a').html('<span>'+text+'</span>')  
        });

        $('header .nav_menu ul li a').click(function(){
            $('.drop_down').slideUp();
            $('.header').removeClass('mobile-open')
                $('.drop_down').removeClass('dropdown-active')
            
        });


});

// filter js
$(document).ready(function() {
    // When a tab button is clicked
    $('.glist__items ul li').click(function() {
        $('.glist__items  ul li').removeClass('active');
        $(this).addClass('active');
      var filter = $(this).data('filter'); 
      $('.split_image_conatiner').each(function() {
        if (filter === 'all' || $(this).hasClass(filter)) {
          $(this).removeClass('hide');
        } else {
          $(this).addClass('hide');
        }
      });
    });
    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
          "slideShow",
          "thumbs",
          "zoom",
          "fullScreen",
          "share",
          "close"
        ],
        loop: false,
        protect: true
      });   
      
      var anchorScroll = $('header a[data-name="scrollTo"]');
      anchorScroll.on('click', function(event) {
          var target = $($(this).attr('href'));
          if (target.length) {
              event.preventDefault();
              $('html, body').animate({
                  scrollTop: target.offset().top-100
              }, 1000);
              if($(this).hasClass("menu-item")){
                  $(this).parent().addClass("active");
                  $(this).parent().siblings().removeClass("active");
              }
          }
      });


      if ($('.scroll-page').length > 0) {
        $(window).on("scroll", function() {
            $('section').each(function() {
                var sectionID = $(this).attr("id"),
                    sectionTop = $(this).offset().top - 100,
                    sectionHight = $(this).outerHeight(),
                    wScroll = $(window).scrollTop(),
                    $navHref = $("a[href='#" + sectionID + "']"),
                    $nav = $('.drop_down').find($navHref).parent();
                if (wScroll > sectionTop - 1 && wScroll < sectionTop + sectionHight - 1) {
                    $nav.addClass('active');
                    $nav.siblings().removeClass('active');
                }
            });
        });
    }

      $(window).scroll(function(){
        if ($(window).scrollTop() >= 50) {
            $('header').addClass('fixed-header');
        }
        else {
            $('nav').removeClass('fixed-header');
        }
    });
  
  });
  
