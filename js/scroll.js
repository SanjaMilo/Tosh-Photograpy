
// Open smooth scrolling navigation

$('.menu-link').click(function() {
	closeLeftRightPanels();
	barMenu.classList.toggle('active');
	isOpened = false;
    let target = $(this).attr('href');
    $('body, html').animate(
        {
            scrollTop: $(target).offset().top
        },
        500
    );
    return false;
});



	// Footer button to scroll to the top of the page

	let scrollBtn = $('.scroll-top');

	function scrollToTop() {
		$('html, body').animate(
			{
				scrollTop: $('html, body').offset().top
			},
			3000
		);
	};

	scrollBtn.click(scrollToTop);