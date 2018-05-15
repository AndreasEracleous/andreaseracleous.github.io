
/* NAVIGATION VISIBLE ON SCROLL */
jQuery(document).ready(function($){
    if (!Modernizr.svg) {
        $("img[src$='.svg']").attr("src", fallback);
    }

	/* =================================
	   LOADER                     
	=================================== */
    /*
	// makes sure the whole site is loaded
	$(window).load(function() {
	        // will first fade out the loading animation
		$(".status").fadeOut();
	        // will fade out the whole DIV that covers the website.
		$(".preloader").fadeOut("slow");
	})
    */
    function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 0) {
            $(".header-nav").addClass("sticky-navigation");
        } else {
            $(".header-nav").removeClass("sticky-navigation");
        }
    }

    $(".nav-mobile").on("click",function(e){
        $(this).toggleClass( "nav-mobile-open" );
        $(".main-nav").toggleClass( "nav-active" );
        $("body").toggleClass("no-scroll");
    });

    $(".menu-item-has-children").on("click",function(e){
        $(this).toggleClass("active");
    });


    $(window).scroll(function () {
        mainNav();
    });

	mainNav();


    //var logo = TweenMax.to('.logo-sprites',2,{repeat:-1,backgroundPosition: "0px -6200px",ease:SteppedEase.config(31)});
    //logo.play();

});
