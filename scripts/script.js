//Carousels
var carouselMain = document.querySelector(".main-carousel");
var carouselTestimonials = document.querySelector(`.testimonials__carousel`);
var productsCta = document.querySelector(`.products-cta`);

var flkty1 = new Flickity(carouselMain, {
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

(() => {
  const d = document,
    s = d.createElement("script");
  s.type = "module";
  s.src = "https://w.behold.so/widget.js";
  d.head.append(s);
})();

//Close menu
window.addEventListener("click", function (e) {
  if (!document.getElementById("menu").contains(e.target)) {
    document.querySelector(`#menu__checkbox`).checked = false;
  }
});
