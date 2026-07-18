const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 2,
  allowTouchMove: false,

  breakpoints: {
    1280: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});