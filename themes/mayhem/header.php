
<!doctype html>
<html class="no-js" <?php language_attributes(); ?>
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title><?php wp_title('|', true, right); bloginfo('name'); ?></title>

<?php wp_head(); ?>

</head>

<body <?php body_class(); ?>

<nav>
	<div class="title-bar" data-responsive-toggle="main-menu" data-hide-for="medium">
	  <button class="menu-icon" type="button" data-toggle></button>
	  <div class="title-bar-title"></div>
	</div>

	<div class="top-bar" id="main-menu">
	  <div id="navbar" class="top-bar-right">
	    <ul class="menu" data-responsive-menu="drilldown medium-dropdown">
				<li id="a-news"><a href="#news">News</a></li>
				<li id="a-about"><a href="#about">About</a></li>
				<li id="a-behind-the-scenes"><a href="#behind-the-scenes">Behind the Scenes</a></li>
				<li id="a-contact"><a href="#contact">Contact</a></li>
	    </ul>
	  </div>
	</div>
</nav>






















