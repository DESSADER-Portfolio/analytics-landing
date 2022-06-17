import Swiper, { Navigation, Pagination } from "swiper";

new Swiper("#reviews-slider", {
  modules: [Navigation, Pagination],
  spaceBetween: 30,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev"
  },
  pagination: {
    el: ".slider__pagination",
    type: "bullets"
  },
  speed: 500,
  loop: true
});