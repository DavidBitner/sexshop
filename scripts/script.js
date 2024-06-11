//Carousels
var carouselMain = document.querySelector(".main-carousel");
var carouselTestimonials = document.querySelector(`.testimonials__carousel`)

var flkty1 = new Flickity(carouselMain, {
  // options
  wrapAround: true,
  autoPlay: 10000,
  selectedAttraction: 0.01,
  friction: 1,
  draggable: false,
  pauseAutoPlayOnHover: false,
});

var flkty2 = new Flickity(carouselTestimonials, {
  wrapAround: true,
  autoPlay: 4000,
  selectedAttraction: 0.01,
  friction: 1,
  prevNextButtons: false,
  pageDots: false,
});

//Keep scroll in one place on reload
document.addEventListener("DOMContentLoaded", function (event) {
  var scrollpos = localStorage.getItem("scrollpos");
  if (scrollpos) window.scrollTo(0, scrollpos);
});

window.onbeforeunload = function (e) {
  localStorage.setItem("scrollpos", window.scrollY);
};
