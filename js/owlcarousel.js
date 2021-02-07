// Owl carousel

// First carousel foe Works section

$(function() {
	$('#works .owl-carousel').owlCarousel({
		loop: true,
		margin: 40,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			600: {
				items: 2,
				nav: false
			},
			1000: {
				items: 3,
				nav: true
				// loop:false
			}
		},
		autoplay: true,
		autoplaySpeed: 900,
		autoplayTimeout: 7000,
		smartSpeed: 1000
    });
    
    // Second carousel for Testimonials section

	$('#testimonials .owl-carousel').owlCarousel({
		loop: true,
		margin: 40,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			}
		},
		autoplay: true,
		autoplaySpeed: 900,
		autoplayTimeout: 7000,
		smartSpeed: 800
	});
});
