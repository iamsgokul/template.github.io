$("#owl-testmonial").owlCarousel({
    navigation: false, // Show next and prev buttons
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true
});
$("#screenshoot-slider").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    items: 6,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3]
});
$('.mobile-menu').click(function(){
    $('nav ul').toggle();
})
$('.mobile-menu-close').click(function(){
    $('nav ul').hide();
})
$(document).scroll(function() {
  var height = $(this).scrollTop();
  if (height > 500) {
    $('.gotop').fadeIn();
  } else {
    $('.gotop').fadeOut();
  }
});
// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
            });
        }
    }
});
new WOW().init();