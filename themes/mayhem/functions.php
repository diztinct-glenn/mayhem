<?php 

	add_theme_support( 'menus' );
	
	function register_theme_menus() {
		
			register_nav_menus(
				array(
					'primary-menu' => __( 'Primary Menu', 'mayhem' )
				)
			);
		
	}
	add_action( 'init', 'register_theme_menus' );

	function theme_styles() {
		
		wp_enqueue_style( 'foundation_css', get_template_directory_uri() . '/css/foundation.min.css' );
		wp_enqueue_style( 'fluidbox_css', get_template_directory_uri() . '/css/fluidbox.min.css' );
		wp_enqueue_style( 'main_css', get_template_directory_uri() . '/style.css' );
		
	}
	add_action('wp_enqueue_scripts', 'theme_styles');
	
	function theme_js() {
		
		wp_enqueue_script( 'modernizr_js', get_template_directory_uri() . '/js/modernizr.js', '', '', false );
		wp_enqueue_script( 'foundation_js', get_template_directory_uri() . '/js/foundation.min.js', array( 'jquery' ), '', true );
		// wp_enqueue_script( 'nested_js', get_template_directory_uri() . '/js/jquery.nested.js', array( 'jquery' ), '', true );
		wp_enqueue_script( 'masonry_js', get_template_directory_uri() . '/js/masonry.pkgd.min.js', array( 'jquery' ), '', true );
		wp_enqueue_script( 'debounce_js', get_template_directory_uri() . '/js/jquery.ba-throttle-debounce.min.js', array( 'jquery' ), '', true );
		wp_enqueue_script( 'fluidbox_js', get_template_directory_uri() . '/js/jquery.fluidbox.min.js', array( 'jquery' ), '', true );
		
		wp_enqueue_script( 'mayhem', get_template_directory_uri() . '/js/main.js', array( 'jquery', 'foundation_js', 'masonry_js', 'debounce_js', 'fluidbox_js' ), '', true );
		
	}
	add_action( 'wp_enqueue_scripts', 'theme_js' );
	











?>
