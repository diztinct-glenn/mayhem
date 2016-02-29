jQuery( function( $ ) {
	
	$( document ).foundation();
	
	// $(function(){
  //   $('#navbar a').click(function () {
  //       $('#navbar a').css('color', 'white');//don't forget to reset other inactive links
  //    $(this).css('color', 'black');
  //    });
 // 	});	
	
	$('.grid').masonry({
	  // set itemSelector so .grid-sizer is not used in layout
	  itemSelector: '.grid-item',
	  // use element for option
	  columnWidth: 0
	})

	// $("#container").nested({selector: '.box'});
	// $("#container").nested({minWidth: 100});
	// $("#container").nested({minColumn: 1});
	// $("#container").nested({gutter: 1});
	// $("#container").nested({
	//   resizeToFit: true,
	//   resizeToFitOptions: { 
	//     resizeAny: true
	//   }
	// });

	$('a[rel="lightbox"]').fluidbox();
	

$( window ).scroll(function(){

		if (isScrolledIntoView('.news h1') === true) {
				$('#a-news a').addClass('in-view');
		} else {
				$('#a-news a').removeClass('in-view');
		}
		
		if (isScrolledIntoView('.about h1') === true) {
				$('#a-about a').addClass('in-view');
		}
		
		if (isScrolledIntoView('.behind-the-scenes h1') === true) {
				$('#a-behind-the-scenes a').addClass('in-view');
		}
		
		if (isScrolledIntoView('.contact h1') === true) {
				$('#a-contact a').addClass('in-view');
		}
		
	});
		
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