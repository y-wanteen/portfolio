// ref: https://www.w3schools.com/cssref/pr_pos_overflow.asp

$(document).ready(function()
{

	//hide fixed nav and show when scrolling down the page
	//ref: https://stackoverflow.com/questions/23315031/how-to-create-a-hidden-navbar-with-bootstrap-that-shows-after-you-scroll
	const $fixedNav = $('.header-bar');
	$fixedNav.hide();

	const $fixedNavHeader = document.getElementById('header');
	const $index = document.getElementById('index');
	var $fixedNavHeaderDisplayStyle;

	const $topSection = document.getElementById('top-section');
	const $projectsSection = document.getElementById('projects-section');
	const $aboutSection = document.getElementById('about-section');
	const $contactSection = document.getElementById('contact-section');

	const $sections = [$topSection, $projectsSection, $aboutSection, $contactSection];
	const $sectionIds = ['#top', '#projects', '#about', '#contact'];

	const numSections = $sections.length;

	const staticSectionOffset = -150;
	var sectionOffset = 0;

	$(window).scroll(function()
	{
		$fixedNavHeaderDisplayStyle = getComputedStyle($fixedNavHeader, null).display;

		var $this = $(this);

		for(i = 0; i < numSections; i++)
		{
			sectionOffset = i == 0 ? 0 : staticSectionOffset;

			if($this.scrollTop() > ($($sections[i]).offset().top + sectionOffset) &&
				$this.scrollTop() < ($($sections[i]).offset().top + $($sections[i]).height() + sectionOffset))
			{
				if(i==0)
				{
					removeHash();
				}
				else
				{
					if(window.location.hash == $sectionIds[i])
						break;

					window.location.hash = $sectionIds[i];
				}
			}
		}

		// update fixed navigation by setting or removing 
		// 	active link appearance
			if (window.location.hash == "#projects")
			{
				//update fixed nav
				$(fixedNavProj).addClass("active");
				$(fixedNavAbout).removeClass("active");
				$(fixedNavContact).removeClass("active");

				if ($fixedNavHeaderDisplayStyle === 'none')
					$fixedNav.fadeIn();
			}

			else if (window.location.hash == "#about")
			{
				//update fixed nav
				$(fixedNavProj).removeClass("active");
				$(fixedNavAbout).addClass("active");
				$(fixedNavContact).removeClass("active");

				if ($fixedNavHeaderDisplayStyle === 'none')
					$fixedNav.fadeIn();
			}

			else if (window.location.hash == "#contact")
			{
				//update fixed nav
				$(fixedNavProj).removeClass("active");
				$(fixedNavAbout).removeClass("active");
				$(fixedNavContact).addClass("active");

				if ($fixedNavHeaderDisplayStyle === 'none')
					$fixedNav.fadeIn();
			}

			else
			{
				//update fixed nav
				$(fixedNavProj).removeClass("active");
				$(fixedNavAbout).removeClass("active");
				$(fixedNavContact).removeClass("active");

				if ($fixedNavHeaderDisplayStyle === 'block')
					$fixedNav.fadeOut();
			}
	})

});

function scrollToSection(id)
{
	document.getElementById(id).scrollIntoView(
	{
		behavior: 'smooth'
	});
}


function scrollToTop()
{
	window.scrollTo(
	{
		top: 0, 
		behavior: 'smooth'
	});
}

//Reference:
//https://stackoverflow.com/questions/1397329/how-to-remove-the-hash-from-window-location-url-with-javascript-without-page-r/5298684#5298684

function removeHash () { 
    history.pushState(
    	"",
    	document.title, 
    	window.location.pathname + window.location.search
    );
}

