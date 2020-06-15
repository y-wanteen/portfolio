// ref: https://www.w3schools.com/cssref/pr_pos_overflow.asp

$(document).ready(function()
{

	//hide fixed nav and show when scrolling down the page
	//ref: https://stackoverflow.com/questions/23315031/how-to-create-a-hidden-navbar-with-bootstrap-that-shows-after-you-scroll
	var $fixedNav = $('.header-bar');

	var $fixedNavHeader = $('.header-bar h1');
	var $fixedNavIcon = $('.icon-line');

	$fixedNav.show();

	$(window).scroll(function()
	{
		console.log($fixedNav.offset().top);

		
		if($fixedNav.offset().top > 10) 
		{
			$fixedNav.removeClass("page-top");
			$fixedNavHeader.removeClass("page-top-text");
			$fixedNavIcon.removeClass("page-top-icon");
		}
		else
		{
			$fixedNav.addClass("page-top");
			$fixedNavHeader.addClass("page-top-text");
		    $fixedNavIcon.addClass("page-top-icon");
		}
	})

});
