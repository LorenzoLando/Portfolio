//Changing navbar css on scroll
$(window).on('scroll', function() {    
     var scroll = $(window).scrollTop();
     console.log(scroll);
    if (scroll >= 100 && scroll < 500) {
          $('.navbar').css("display", "none");

     } else if(scroll < 50) {
          $('.navbar').css("display", "block");
          $('.navbar').addClass('background-top');
     } else if (scroll >= 500 ) {
          $('.navbar').css("display", "block");
          $('.navbar').removeClass('background-top');
     }
});







