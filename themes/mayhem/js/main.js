jQuery( function( $ ) {
	
	$( document ).foundation();
	
	$('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: 0
	})

	$('a[rel="lightbox"]').fluidbox();
	
	mayhemMenu();

	$( window ).scroll(function() {
		
		mayhemMenu();
		
	});
	
	function mayhemMenu() {
		
		$news_in_view = false;
		$about_in_view = false;
		$behind_the_scenes_in_view = false;
		$contact_in_view = false;

		if ( isScrolledIntoView('.news h1') && $news_in_view === false ) {
			
			$about_in_view = false;
			$behind_the_scenes_in_view = false;
			$contact_in_view = false;
			
			$('.top-bar a').removeClass('in-view');
			
			$('#a-news a').addClass('in-view');
			$news_in_view = true;
		}
		
		if (isScrolledIntoView('.about h1') ) {
			
			$news_in_view = false;
			$behind_the_scenes_in_view = false;
			$contact_in_view = false;
			
			$('.top-bar a').removeClass('in-view');
			
			$('#a-about a').addClass('in-view');
			
			$about_in_view = false;
			
		}
		
		if (isScrolledIntoView('.behind-the-scenes h1') ) {
			
			$news_in_view = false;
			$about_in_view = false;
			$contact_in_view = false;
			
			$('.top-bar a').removeClass('in-view');
			
			$('#a-behind-the-scenes a').addClass('in-view');
			
			$behind_the_scenes_in_view = false;
			
		}
		
		if (isScrolledIntoView('.contact h1') ) {
			
			$news_in_view = false;
			$about_in_view = false;
			$behind_the_scenes_in_view = false;
			
			$('.top-bar a').removeClass('in-view');
			
			$('#a-contact a').addClass('in-view');
			
			$contact_in_view = false;
			
		}
		
	}
		
	function isScrolledIntoView(elem) {
		
		var $elem = $(elem);
		var $window = $(window);

		var docViewTop = $window.scrollTop();
		var docViewBottom = docViewTop + $window.height();

		var elemTop = $elem.offset().top;
		var elemBottom = elemTop + $elem.height();

		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	
	}
	
} );
