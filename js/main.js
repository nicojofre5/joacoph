
let prevScrollpos = window.pageYOffset;
let menu = document.querySelector('#menu');
let menu_bar = document.querySelector('#btn-toggle');
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-100px";
        menu.classList.remove("btn-togler-event");
      }
      prevScrollpos = currentScrollPos;
    }


  menu_bar.addEventListener('click',function(){
    menu.classList.toggle('btn-togler-event')
});
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    menu.classList.toggle('btn-togler-event');
  }));