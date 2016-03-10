jQuery(function($) {

  $(document).foundation();
	
	//Fades Out Carved in Mayhem Text
	
	$(window).scroll(function(){
    $(".top").css("opacity", 1 -
	$(window).scrollTop() / 350);
  });

	//Back to Top Button. Have Scott help with reformatting so not writting out jQuery twice.
	
	jQuery(document).ready(function($) {
			// browser window scroll (in pixels) after which the "back to top" link is shown
			var offset = 300,
				//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
				offset_opacity = 1200,
				//duration of the top scrolling animation (in ms)
				scroll_top_duration = 700,
				//grab the "back to top" link
				$back_to_top = $('.cd-top');
		
		
		//smooth scroll to top
		$back_to_top.on('click', function(event){
			event.preventDefault();
			$('body,html').animate({
				scrollTop: 0 ,
				}, scroll_top_duration
			);
		});
	
	});

  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 0
  });


  // Masonry's site says use layout to do this? Don't have a clue.
  var $grid = $('.grid').masonry({});
  // change size of item by toggling gigante class
  $grid.on('click', '.grid-item', function() {
    $(this).toggleClass('gigante');
    // trigger layout after item size changes
    $grid.masonry('layout');
  });

  $('a[rel="lightbox"]').fluidbox();

  // Scott says this is for page load but when it's commented out it still works fine?
  mayhemMenu();

  $(window).scroll(function() {

    mayhemMenu();

  });

  function mayhemMenu() {

    $news_in_view = false;
    $about_in_view = false;
    $behind_the_scenes_in_view = false;
    $contact_in_view = false;

    if (isScrolledIntoView('.featured')) {

      $news_in_view === false
      $about_in_view = false;
      $behind_the_scenes_in_view = false;
      $contact_in_view = false;

      $('.top-bar a').removeClass('in-view');
    }

    if (isScrolledIntoView('.news .section-bottom') && $news_in_view === false) {

      $about_in_view = false;
      $behind_the_scenes_in_view = false;
      $contact_in_view = false;

      $('.top-bar a').removeClass('in-view');

      $('#a-news a').addClass('in-view');
      $news_in_view = true;
    }

    if (isScrolledIntoView('.about .section-bottom')) {

      $news_in_view = false;
      $behind_the_scenes_in_view = false;
      $contact_in_view = false;

      $('.top-bar a').removeClass('in-view');

      $('#a-about a').addClass('in-view');

      $about_in_view = false;

    }

    if (isScrolledIntoView('.behind-the-scenes .section-bottom')) {

      $news_in_view = false;
      $about_in_view = false;
      $contact_in_view = false;

      $('.top-bar a').removeClass('in-view');

      $('#a-behind-the-scenes a').addClass('in-view');

      $behind_the_scenes_in_view = false;

    }

    if (isScrolledIntoView('.contact .section-bottom')) {

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

});