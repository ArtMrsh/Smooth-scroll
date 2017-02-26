var btn = document.getElementsByClassName('popup-btn');
var nav = document.querySelector('.show');

  for (var i = 0; i < btn.length; i++) {
   btn[i].onclick = function (head) {
     var modal = document.querySelector('.modal-body');
     var modalHeader = document.querySelector('.modal-title');
     head = this.parentNode.previousElementSibling;
     modalHeader.innerHTML = head.innerHTML;
     modalHeader.style.textTransform = "uppercase";
     if (this.id === "indian") {
       modal.className = ("modal-body indian")
     } else if (this.id === "french") {
       modal.className = ("modal-body french")
     } else if (this.id === "italian") {
       modal.className = ("modal-body italian")
     } else if (this.id === "steakhouse") {
       modal.className = ("modal-body steakhouse")
     } else if (this.id === "seafood") {
       modal.className = ("modal-body seafood")
     } else if (this.id === "sushi") {
       modal.className = ("modal-body sushi")
     } else if (this.id === "mexican") {
       modal.className = ("modal-body mexican")
     } else if (this.id === "chinese") {
       modal.className = ("modal-body chinese")
     } else if (this.id === "pizza") {
       modal.className = ("modal-body pizza")
     } else if (this.id === "american") {
       modal.className = ("modal-body american")
     }
   }
 };
document.querySelector('.show-close').onclick = closeNav;
document.querySelector('.open').onclick = openNav;
function closeNav() {
  nav.classList.toggle("showing")
};
function openNav() {
  nav.classList.toggle("showing");
}
