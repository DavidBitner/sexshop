//Carousels
var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  // options
  wrapAround: true,
  autoPlay: 10000,
  selectedAttraction: 0.01,
  friction: 1,
  draggable: false,
  pauseAutoPlayOnHover: false,
});

//Keep scroll in one place on reload
document.addEventListener("DOMContentLoaded", function (event) {
  var scrollpos = localStorage.getItem("scrollpos");
  if (scrollpos) window.scrollTo(0, scrollpos);
});

window.onbeforeunload = function (e) {
  localStorage.setItem("scrollpos", window.scrollY);
};
