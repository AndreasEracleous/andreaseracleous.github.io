$(document).ready(function(){

	$('.multiple-items').slick({
	  infinite: false,
	  lazyLoad: 'ondemand',
	  slidesToShow: 3,
	  slidesToScroll: 1,
	 responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        dots: true
      }
    },{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        dots: true
      }
    }]
	});

  $('#notification-close').on("click", function(){
      $(".notification-bar").slideUp();
      $(this).hide();
  });

});