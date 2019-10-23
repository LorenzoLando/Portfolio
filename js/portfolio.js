//when scrolling down nav background rgb(0,0,128)

 $(window).on('scroll', function() {    
     var scroll = $(window).scrollTop();
     if (scroll >= 50 && scroll < 500) {
          $('.navbar').css("display", "hidden");

     } else if(scroll < 50) {
          $('.navbar').css("display", "block");
          $('.navbar').addClass('background-top');
     } else if (scroll >= 500 ) {
          
          $('.navbar').removeClass('background-top');
     }
     
 });



    
 







//when scrolling down button and h1 and h1 p to disappear





//when scrolling up button and h1 and h1 p to re-appear


