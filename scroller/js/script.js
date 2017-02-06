var marginY = 0;
var destination  = 0;
var speed = 15;
var scroller = null;

var initScroll = function (elementId) {
   destination = document.getElementById(elementId).offsetTop;

   scroller = setTimeout(function() {
      initScroll(elementId);
   }, 1)

   marginY += speed;

   if (marginY >= destination) {
      clearTimeout(scroller);
   }

   window.scroll(0, marginY)


};

window.onscroll = function(){
   marginY = this.pageYOffset;   
};

var toTop = function () {
   scroller = setTimeout(function() {
      toTop();
   }, 1)

   marginY -= speed;

   if (marginY <= 0) {
      clearTimeout(scroller);
   }

   window.scroll(0, marginY)
};