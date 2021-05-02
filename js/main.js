
jQuery(document).ready(function($) {
  $("#news-slider").owlCarousel({
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [980, 2],
    itemsMobile: [600, 1],
    navigation: true,
    navigationText: ["", ""],
    pagination: true,
    autoplay:true,
    autoplayTimeout:2300,
    autoplayHoverPause:true,
  });

  $("#testimonial-slider").owlCarousel({
    items: 3,
    itemsDesktop:[1000,3],
    itemsDesktopSmall:[979,2],
    itemsTablet:[768, 2],
    itemsMobile:[650, 1],
    pagination: true,
    autoplay:true,
    autoplayTimeout:2300,
    autoplayHoverPause:true,
    
  });
})
