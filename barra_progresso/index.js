var counter = 0;

window.addEventListener("DOMContentLoaded",move=() => {
  if (counter == 0) {
    j = 1;
    var elem = document.querySelector(".progresso-done");

    var width = 50;
    var main = setInterval(frame,50);
    function frame() {
      if (width >= 100) {
        clearInterval(main);
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
});