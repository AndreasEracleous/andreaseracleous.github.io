/* =================================
===  WOW ANIMATION             ====
=================================== */
wow = new WOW(
  {
	mobile: false
  });
wow.init();


(function ($) {
	'use strict';

	/* =================================
	===  MAILCHIMP                 ====
	=================================== */
	function mailchimpCallback(resp) {
		if (resp.result === 'success') {
			$("#displayRegFormAlert").removeAttr("style");
			$("#displayRegFormAlert").html('<div class="alert alert-success alert-dismissible fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>' + resp.msg + '</div>').fadeIn(1000);

		} else if (resp.result === 'error') {
			$("#displayRegFormAlert").removeAttr("style");
			$("#displayRegFormAlert").html('<div class="alert alert-warning alert-dismissible fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>' + resp.msg + '</div>').fadeIn(1000);
		}
	}

	$('.mailchimp').ajaxChimp({
		callback: mailchimpCallback,
		url: "http://andreweracleous.us7.list-manage.com/subscribe/post?u=ab42dbf8da57146a53dbf8db3&amp;id=b85f1bb792" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".  
	});

	/* =================================
	===  EMAIL VALIDATION          ====
	=================================== */	
	var isValidEmail = function(emailAddress) {
		var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
		return pattern.test(emailAddress);
	};

	/* =================================
	===  SUBSCRIPTION FORM          ====
	=================================== */	
	$("#subscription-form").submit(function(e) {
		e.preventDefault();
		var email = $("#subscriber-email").val(),
			dataString = 'email=' + email;

		if (isValidEmail(email)) {
			$.ajax({
				type: "POST",
				url: "subscribe/subscribe.php",
				data: dataString,
				success: function () {

				}
			});
		} else {

		}
		return false;
	});

	/* =================================
	===  CONTACT FORM               ====
	=================================== */
	$("#contact").submit(function(e) {
		e.preventDefault();
		var name = $("#cf-name").val(),
		 email = $("#cf-email").val(),
		 subject = $("#cf-subject").val(),
		 message = $("#cf-message").val(),
		 dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message,
		 successMsg = 'Your message has been sent successfully.',
		 errorMsg = 'E-mail must be valid and message must be longer than 1 character.';	

		if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
			$.ajax({
				type: "POST",
				url: "sendmail.php",
				data: dataString,
				success: function () {
					$("#displayContactFormAlert").removeAttr("style");
					//IF MAIL SENT SUCCESSFULLY
					$("#displayContactFormAlert").html('<div class="alert alert-success alert-dismissible fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>' + successMsg + '</div>').fadeIn(1000);
				}
			});
		}
		else {
			$("#displayContactFormAlert").removeAttr("style");
			//IF MAIL SENDING UNSUCCESSFULL
			$("#displayContactFormAlert").html('<div class="alert alert-warning alert-dismissible fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>' + errorMsg + '</div>').fadeIn(1000);			
		}
		return false;
	});
	
	/* =================================
	===  DETECT END CSS ANIMATIONS ====
	=================================== */
	function whichAnimationEvent(){
	  var t,
		  el = document.createElement("fakeelement");

	  var animations = {
		"animation"      : "animationend",
		"OAnimation"     : "oAnimationEnd",
		"MozAnimation"   : "animationend",
		"WebkitAnimation": "webkitAnimationEnd"
	  }

	  for (t in animations){
		if (el.style[t] !== undefined){
		  return animations[t];
		}
	  }
	}
	var animationEvent = whichAnimationEvent();

	/* =================================
	===  COUNTDOWN            ====
	=================================== */
	var startDate = $("#display-countdown").attr("aria-startdate");
    $('#display-countdown').countdown(startDate, function(event) {
		var $this = $(this).html(event.strftime(''
				+ '<span>%-w</span> week%!w '
				+ '<span>%-d</span> day%!d '
				+ '<span>%H</span> hr '
				+ '<span>%M</span> min '
				+ '<span>%S</span> sec'));
    });
	
    /* =================================
	===  VIDEO PUPUP               ====
	=================================== */ 
	$('#modalVideo').on('hidden.bs.modal', function () {
	var $this = $(this).find('iframe'),
	  tempSrc = $this.attr('src');
	  $this.attr('src', "");
	  $this.attr('src', tempSrc);
	});

    /* =================================
	===  SCROLL TO TOP            ====
	=================================== */ 	
    $("#back-top").hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-top').fadeIn("slow");
        } else {
            $('#back-top').fadeOut("slow");
        }
    });
		
	$('#back-top').click(function(e) {
		$('html,body').animate({
		  scrollTop: '0px'
		}, 400);			
	});	
	
	/* ===================================
	===  SCROLL TO REGISTRATION FORM ====
	====================================== */ 	
	$('[id*="backTopRegForm"]').click(function(e) {
		$('html,body').animate({
		  scrollTop: '0px'
		}, 300, function() {
			$(".registration-form").addClass("animated shake");
			$(".registration-form").one(animationEvent, function(event) {
				// Do something when the animation ends
				$(this).removeClass("animated shake");
			  });
		});			
	});	

	/* =================================
	===  Bootstrap Internet Explorer 10 in Windows 8 and Windows Phone 8 FIX
	=================================== */
	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
		var msViewportStyle = document.createElement('style')
		msViewportStyle.appendChild(
		document.createTextNode('@-ms-viewport{width:auto!important}'))
		document.querySelector('head').appendChild(msViewportStyle)
	}


	
})(jQuery);