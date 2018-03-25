    var scrollme = document.getElementById("scrollme");
    scrollme.addEventListener("click",runScroll,false)
    function runScroll() {
    scrollTo(document.documentElement, 0, 300);
    }
    function scrollTo(element, to, duration) {
    if (duration < 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;
    
    setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    scrollTo(element, to, duration - 10);
    }, 10);
    }
    // AsyncImage
    var AsyncImage = function(currentImg) {
    this.preLoadImage = new Image();
    this.preLoadImage.currentImg = currentImg;
    this.preLoadImage.onload = function(){
    this.currentImg.src  = this.src;
    this.currentImg.removeAttribute('data-src');
    //this.currentImg.className = "load";
    }
    this.preLoadImage.onerror = function() {
    throw new Error('Could not load the big image.');
    };
    }
    AsyncImage.prototype.startDownloading = function(){
    console.log("init");
    this.preLoadImage.src = this.preLoadImage.currentImg.dataset.src;
    }
    var imgLength = document.images.length;
    for (var i=0; i<imgLength; i++) {
    if (document.images[i].getAttribute('data-src')) {
    new AsyncImage(document.images[i]).startDownloading();
    }
    }