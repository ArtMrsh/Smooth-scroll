// OPEN/CLOSE NAVIGATION
   var closeBtn = document.querySelector(".close_nav");
   var menuBtn = document.querySelector(".sandwich");
   var body = document.body;
   var html = document.documentElement;
   menuBtn.onclick = showNav;
   function showNav () {
      nav.classList.add("show_menu");
      body.style.overflowY = "hidden";
      html.style.overflowY = "hidden";
   };
   closeBtn.onclick = hideNav;
   function hideNav() {
      nav.classList.remove("show_menu");
      body.style.overflowY = "auto";
      html.style.overflowY = "auto";
   };
// NAVIGATION SCROLLING
var marginY = 0;
var destination  = 0;
var speed = 10;
var scroller = null;
var el = document.querySelector(".top_btn");
var nav = document.querySelector(".menu");
function initScroll (elemid) {
   destination = document.getElementById(elemid).offsetTop;
   scroller = setTimeout(function() {
      initScroll(elemid);
   }, 1)
   marginY += speed;
   if (marginY >= destination) {
      clearTimeout(scroller);
   }
   window.scroll(0, marginY)
   nav.classList.remove("show_menu");
   body.style.overflowY = "auto";
   html.style.overflowY = "auto";
};
// TO TOP SCROLLING
var scrolling = null;
el.onclick = toTop;
function toTop () {
   scrolling = setTimeout(function() {
      toTop();
   }, 1)
   marginY -= speed;
   if (marginY <= 0) {
      clearTimeout(scrolling);
   }
   window.scroll(0, marginY)
};
window.onscroll = function(){
   marginY = this.pageYOffset;
};
// SCROLL-TO-TOP BUTTON SHOWING
  window.addEventListener("scroll", foo);
  function foo() {
     var scrollToTop = window.pageYOffset;
     if (scrollToTop >= 100) {
        el.classList.add("show_btn");
     } else if (scrollToTop <= 100) {
        el.classList.remove("show_btn")
     }
  }

// PROGRESS BAR STARTING (ONCE, MARKER !)
var marker = true;
(function onScroll() {
  window.addEventListener("scroll", callbackFunc);
  function callbackFunc() {
     var block = document.querySelector(".home_page__skills");
     var scrollToTop = window.pageYOffset;
     var blockPos = block.offsetTop;
     var el = document.querySelector(".top_btn");
     if (blockPos < scrollToTop + 700 && marker === true) {
      myMove();
      marker = false;
    } else {
      return false;
   }
  }
}());
// PROGRESS BAR MOVING
function myMove() {
   var width = 0;
   var elems = document.getElementsByClassName("move_bar");
   var timer = setInterval(frame = function () {
      for (var i = 0; i < elems.length; i++) {
         if (width >= 100){
            clearInterval(timer)
         } else {
            width ++;
            elems[i].style.width = width + "%";
         }
      }
   }, 10)
};
