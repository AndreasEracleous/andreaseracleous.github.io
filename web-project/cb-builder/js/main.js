$(document).ready(function () {
    var $window = $(window),
        $body = $('body'),
        $scrollToTopEl = $('#scrollToTop');

    var seconds = new Date().getTime() + 660000;
    $('#display-countdown1').countdown(seconds, {elapse: true})
    .on('update.countdown', function(event) {
      var $this = $(this);
      if (event.elapsed) {
        window.location.replace("https://www.clickbank.com/university/watch/u1.html");
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
        window.location.replace("https://www.clickbank.com/university/watch/u1.html");
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
        window.location.replace("https://www.clickbank.com/university/watch/u1.html");
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

    function setCookie(ctime) {
        document.cookie = "time=" + ctime;
    }
    
    function getCookie(ctime) {
        var time = ctime + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(time) == 0) {
                return c.substring(time.length, c.length);
            }
        }
        return "";
    }

    function checkCookie() {
        var time=getCookie("time");
        if (time != "") {
           //setTimeout(showIt, 0); // 1000 = 1 sec
           window.location.replace("https://www.clickbank.com/university/watch/u1.html");
        } else {
           //setTimeout(showIt, 430000); // 1000 = 1 sec
           setCookie("time", time, 30);
        }
    }
    
    checkCookie();
    setCookie("1");

