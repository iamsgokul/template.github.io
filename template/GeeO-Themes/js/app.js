$(document).ready(function(){
    /*--Mobile Grid --*/
    $('.full-preview img').click(function(){
        $('.feature-preview-phone').addClass('gridshow');
    })
    $('.previre-grid a img').click(function(){
        var gridImg = $(this).attr('src');
        $('.full-preview a img').attr("src", gridImg);
        $('.feature-preview-phone').removeClass('gridshow');
    })
    /*--Mobile Menu--*/
    $('.top-menu').click(function(){
        $('.menu').toggleClass('menu-show');
        if($('.menu').hasClass('menu-show')){
            $('.top-menu i').removeClass('ion-ios-menu');
            $('.top-menu i').addClass('ion-ios-close-outline');
        }
        else{
            $('.top-menu i').removeClass('ion-ios-close-outline');
            $('.top-menu i').addClass('ion-ios-menu');
        }
    })
    /*--Modal Popup--*/
    $('.modal-open').click(function(){
        $('body').append('<div class="modal-back-shadow"></div>');
        $($(this).data("target")).show();
        $('body').addClass('popup-comes');
    })
    $(".modal-close").click(function(){
        $('.modal').hide();
        $('.modal-back-shadow').remove();
        $('body').removeClass('popup-comes');
    })
    $(document).on('keydown',function (e) {
        if (e.keyCode === 27 ) {
            $('.modal,.modal-back-shadow').hide();
        }
        $('.modal-back-shadow').remove();
    });
    /*--Faq Question Answers--*/
    $('.faqquestion').click(function(e){
        e.preventDefault();
        var qest = $(this);
        if (qest.next().hasClass('show')){
            debugger;
            qest.next().removeClass('show');
            qest.next().slideUp(350);
        } else {
            debugger
            qest.parent().parent().find('.faqanswer').removeClass('show');
            qest.parent().parent().find('.faqanswer').slideUp(350);
            qest.next().toggleClass('show');
            qest.next().slideToggle(350);
        }
    });
    $("#owl-screen").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items : 6,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
    });
    $("#owl-testmonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
    });
    $('.map-block').click(function(){
        $(this).find('iframe').addClass('clicked')
    })
        .mouseleave(function(){
        $(this).find('iframe').removeClass('clicked')
    });
    /*-- Count Up Section --*/
    $(document).ready(function($){
        $('.coutnumber').counterUp({
            delay: 10,
            time: 1000
        });
    })
    /*--Smooth Scrolling--*/
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
    /*-- Type Section --*/
    $(function(){
        $(".type").typed({
            strings: ["Chating", "Video Calling", "Voice Calling", "Stickers", "Emoij", "Files"],
            typeSpeed: 100,
            backDelay: 1500,
            loop: true,
            loopCount: false
        });
    });
    new WOW().init();
    /*--Go to Top--*/
    $(window).scroll(function() {
        $(this).scrollTop() > 100 ? $(".gtop:hidden").stop(!0, !0).css("display", "block") : $(".gtop").stop(!0, !0).css("display", "none")
    }),$(function() {
        $(".gtop").click(function() {
            return $("html,body").animate({
                scrollTop: 0
            }, 800), !1
        })
    })
    $(window).load(function() {
        $(".pager-loader").fadeOut("slow");
    });
})