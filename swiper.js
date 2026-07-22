const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: false,
  allowTouchMove: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 2,
    }
  }
});