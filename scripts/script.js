var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  // options
  wrapAround: true,
  autoPlay: 8000,
  selectedAttraction: 0.01,
  friction: 1,
  draggable: false,
});
