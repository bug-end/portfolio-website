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

	// sticky navbar animation

	function navbarAnimation(){
		let nav_offset_top = $('.header_area').height() + 50;
		if($('.header_area').length){
			$(window).scroll(function(){
				let scroll = $(window).scrollTop();
				if(scroll >= nav_offset_top){
					$('.header_area .main-menu').addClass('box_shadow');
				}else{
					$('.header_area .main-menu').removeClass('box_shadow');
				};
			});
		};
	};

	navbarAnimation();

	// smooth scroll

	let scrollLink = $('.scroll');

	scrollLink.click(function(event) {
		event.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top - 80
		}, 1000 )
	});

	// menu active link switching

	$(window).scroll(function() {
		let scrollbarLocation = $(this).scrollTop();

		scrollLink.each(function() {

			let sectionOffset = $(this.hash).offset().top;

			if (sectionOffset <= scrollbarLocation + 85) {
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
			}

		})

	})

});








