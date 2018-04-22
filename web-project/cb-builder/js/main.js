$(document).ready(function () {
    var $window = $(window),
        $body = $('body'),
        $scrollToTopEl = $('#scrollToTop');

    var seconds = new Date().getTime() + 660000;
    $('#display-countdown1').countdown(seconds, {elapse: true})
    .on('update.countdown', function(event) {
      var $this = $(this);
      if (event.elapsed) {
        setCookie("time", '0', 30);
        checkCookie();
      } else {
        $this = $(this).html(event.strftime(''
                    + '<span>%H</span> HOURS '
                    + '<span>%M</span> MINUTES '
                    + '<span>%S</span> SECONDS'));
      }
    });
    $('#display-countdown2').countdown(seconds, {elapse: true})
    .on('update.countdown', function(event) {
     var $this = $(this);
      if (event.elapsed) {
        setCookie("time", '0', 30);
        checkCookie();
      } else {
        $this = $(this).html(event.strftime(''
                    + '<span>%H</span> HOURS '
                    + '<span>%M</span> MINUTES '
                    + '<span>%S</span> SECONDS'));
      }
    });

     $('#display-countdown3').countdown(seconds, {elapse: true})
    .on('update.countdown', function(event) {
     var $this = $(this);
      if (event.elapsed) {
        setCookie("time", '0', 30);
        checkCookie();
      } else {
        $this = $(this).html(event.strftime(''
                    + '<span>%H</span> <span class="hr">HOURS</span> '
                    + '<span>%M</span> <span class="min">MINUTES</span> '
                    + '<span>%S</span> <span class="sec">SECONDS</span>'));
      }
    });       

    var scrollToTop = function () {
        $scrollToTopEl.click(function () {
            $('body,html').stop(true).animate({
                scrollTop: 0
            }, 400);
            return false;
        });
    }

    var showTopScroll = function () {
        if ($window.scrollTop() > 450) {
            $scrollToTopEl.fadeIn();
        } else {
            $scrollToTopEl.fadeOut();
        }
    }

    var windowscroll = function () {
        $window.on('scroll', function () {
            showTopScroll();
        });
    }

    scrollToTop();
    windowscroll();
});