//when scrolling down nav background rgb(0,0,128)

 $(window).on('scroll', function() {    
      var scroll = $(window).scrollTop();

      if (scroll >= 500) {
        
 			$('.navbar').removeClass('background-top');

 when scrolling up nav background back to normal
      } else {

      		$('.navbar').addClass('background-top');
      }
 });






//when scrolling down button and h1 and h1 p to disappear





//when scrolling up button and h1 and h1 p to re-appear


