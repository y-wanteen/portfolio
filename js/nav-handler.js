// ref: https://www.w3schools.com/cssref/pr_pos_overflow.asp

$(document).ready(function()
{

	//hide fixed nav and show when scrolling down the page
	//ref: https://stackoverflow.com/questions/23315031/how-to-create-a-hidden-navbar-with-bootstrap-that-shows-after-you-scroll
	var $fixedNav = $('.header-bar');

	$fixedNav.hide();

	$(window).scroll(function()
	{
		if($fixedNav.offset().top > 10) {
			$fixedNav.fadeIn();
		}
		else
		{
			$fixedNav.fadeOut();
		}
	})


	//fade in top section content after icon finishes drawing
	 // $(".top-content").delay(2800).fadeIn(1000);

	 //scrollify plug-in for smoother page scrolling
	 //source: https://projects.lukehaas.me/scrollify/
	 $.scrollify({
	 	section:".section",
	 	// interstitialSection : ".footer",
	 	easing:"easeOutExpo",
	 	// scrollbars:false,
	 	scrollSpeed:1000,
	 	offset:-120,
		after:function()
		{
			//update fixed navigation by setting or removing 
			//active link appearance
			if (window.location.hash == "#projects")
			{
				//update fixed nav
				$(fixedNavProj).addClass("active");
				$(fixedNavAbout).removeClass("active");
				$(fixedNavContact).removeClass("active");
			}

			else if (window.location.hash == "#about")
			{
				//update fixed nav
				$(fixedNavProj).removeClass("active");
				$(fixedNavAbout).addClass("active");
				$(fixedNavContact).removeClass("active");
			}

			else if (window.location.hash == "#contact")
			{
				//update fixed nav
				$(fixedNavProj).removeClass("active");
				$(fixedNavAbout).removeClass("active");
				$(fixedNavContact).addClass("active");
			}

			else if (window.location.hash == "#top")
			{
				//update fixed nav
				$(fixedNavProj).removeClass("active");
				$(fixedNavAbout).removeClass("active");
				$(fixedNavContact).removeClass("active");
			}
		}

	 });

});
