//Changing navbar css on scroll
$(window).on('scroll', function() {    
     var scroll = $(window).scrollTop();
     if (scroll >= 100 && scroll < 500) {
          $('.navbar').addClass('hidden');

     } else if(scroll < 50) {
          $('.navbar').removeClass('hidden');
          $('.navbar').addClass('background-top');
     } else if (scroll >= 500 ) {
          $('.navbar').removeClass('hidden');
          $('.navbar').removeClass('background-top');
     }
});







