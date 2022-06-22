import Swiper, { Navigation, Pagination } from "swiper";
import { scroll } from "@src/scripts/scrollReveal";

function runAnimation(): void {
  // section-intro
  scroll.reveal(".section-intro__heading");
  scroll.reveal(`
    .section-intro__description,
    .section-intro__form,
    .section-intro__label
  `, { interval: 200, delay: 100 });
  scroll.reveal(".section-intro__image", { distance: "0px", scale: 0.95 });
  scroll.reveal(`
    .section-intro__partners,
    .section-intro .partner-item
  `, { interval: 100 });

  // section-analytics
  scroll.reveal(".section-analytics .section-heading__heading");
  scroll.reveal(".section-analytics .analytics-item", { interval: 200, delay: 300 });

  // section-preview
  scroll.reveal(".section-preview .section-heading__heading");
  scroll.reveal(".section-preview__image", { scale: 0.95, delay: 300 });
  scroll.reveal(".section-preview .preview-item", { interval: 200, delay: 300 });

  // section-analysis
  scroll.reveal(`
    .section-analysis .section-heading__heading,
    .section-analysis .section-heading__description,
    .section-analysis__button,
    .section-analysis .analysis-item
  `, { interval: 200 });
  scroll.reveal(".section-analysis__image", { distance: "0px", scale: 0.95 });

  // section-security
  scroll.reveal(".section-security .section-heading__heading");
  scroll.reveal(".section-security .security-item", { interval: 200, delay: 100 });
  scroll.reveal(".section-security .item-dot", { 
    scale: 0,
    interval: 300, 
    delay: 100,
    distance: "10px",
    origin: "left"
  });

  // section-features
  scroll.reveal(`
    .section-features .section-heading__heading,
    .section-features .section-heading__description,
    .section-features__button
  `, { interval: 200 });
  scroll.reveal(".section-features .feature-item", { interval: 100 });
  scroll.reveal(".section-features__image", { distance: "0px", scale: 0.95 });

  // section-reviews
  scroll.reveal(".section-reviews .section-heading__heading");
  scroll.reveal(".section-reviews .reviews-slider", { delay: 300 });

  // section-trial
  scroll.reveal(`
    .section-trial,
    .section-trial .section-heading__heading,
    .section-trial .section-heading__description,
    .section-trial__form
  `, { interval: 200 });
  scroll.reveal(".section-trial .trial-item", { interval: 100, delay: 300 });
}

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

window.addEventListener("load", () => {
  runAnimation();
});