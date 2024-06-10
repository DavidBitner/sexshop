let currentSlide = 0;
let slideInterval;

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".carousel-item");
  const indicators = document.querySelectorAll(".indicator");
  items[currentSlide].classList.add("active");
  indicators[currentSlide].classList.add("active");
  startAutoplay();

  function updateIndicators() {
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentSlide);
    });
  }

  function moveSlide(direction) {
    items[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + direction + items.length) % items.length;
    items[currentSlide].classList.add("active");
    updateIndicators();
    resetAutoplay();
  }

  function setSlide(index) {
    items[currentSlide].classList.remove("active");
    currentSlide = index;
    items[currentSlide].classList.add("active");
    updateIndicators();
    resetAutoplay();
  }

  function startAutoplay() {
    slideInterval = setInterval(() => {
      moveSlide(1);
    }, 6000); // Change slide every 3 seconds
  }

  function resetAutoplay() {
    clearInterval(slideInterval);
    startAutoplay();
  }

  window.moveSlide = moveSlide;
  window.setSlide = setSlide;
});
