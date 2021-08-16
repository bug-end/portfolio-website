$(document).ready(function(){

	let $btns = $('.project-area .button-group button');

	$btns.click(function(e){

		$('.project-area .button-group button').removeClass('active');
		e.target.classList.add('active');

		let selector = $(e.target).attr('data-filter');
		$('.project-area .grid').isotope({
			filter : selector
		});

		return false;
	})

	$('.project-area .button-group #btn1').trigger('click');

	$('.project-area .grid .test-popup-link').magnificPopup({
  		type: 'image',
  		gallery:{enabled:true}
	});

	// owl-carousel

	$('.site-main .client-area .owl-carousel').owlCarousel({
		loop: true,
		autoplay: true,
		dots: true,
		responsive:{
			0:{
				items: 1
			},
			544:{
				items: 2
			}
		},
		autoplayHoverPause: true
	});

	// sticky navbar

	function navbarFixed(){
		let nav_offset_top = $('.header_area').height() + 50;
		if($('.header_area').length){
			$(window).scroll(function(){
				let scroll = $(window).scrollTop();
				if(scroll >= nav_offset_top){
					$('.header_area .main-menu').addClass('navbar_fixed');
				}else{
					$('.header_area .main-menu').removeClass('navbar_fixed');
				};
			});
		};
	};

	navbarFixed();

});


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });








