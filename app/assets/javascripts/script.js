$(document).ready(function() {
    
    //sticky navigation waypoint
    $('.js-nav').waypoint(function(direction) {
       if (direction == 'down') {
           $('nav').addClass('sticky');
       } else {
           $('nav').removeClass('sticky');
       }
    }, {
        offset: '100px;'
    });
    
    $('.animate-features').waypoint(function(direction) {
        $('.animate-features').addClass('animated fadeIn');
    }, {
        offset: '400px;'
    });
    
    $('.animate-phone').waypoint(function(direction) {
        $('.animate-phone').addClass('animated fadeInUp');
    }, {
        offset: '400px;'
    });
    
    $('.animate-plan').waypoint(function(direction) {
        $('.animate-plan').addClass('animated pulse');
    }, {
        offset: '450px;'
    });
     
     
    $('.scroll-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js-plans').offset().top}, 1000);
    });
    
    $('.scroll-features').click(function() {
        $('html, body').animate({scrollTop: $('.js-features').offset().top}, 1000);
    });
    
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    
    $('.js-nav-icon').click(function() {
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon i');
        nav.slideToggle(200);
        
        if(icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
    
});