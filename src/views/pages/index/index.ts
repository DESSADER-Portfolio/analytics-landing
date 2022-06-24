import Swiper, { Navigation, Pagination } from "swiper";
import { animations, animateOnScroll } from "@src/scripts/animations";

const animateElements = [
  {
    element: `
      .section-intro__heading,
      .section-intro__description,
      .section-intro__form,
      .section-intro__label
    `,
    animation: animations.fadeUp({ stagger: 0.2 })
  },
  {
    element: ".section-intro__image",
    animation: animations.scaleIn({ duration: 2 })
  },
  {
    element: `
      .section-intro__partners,
      .section-intro .partner-item
    `,
    animation: animations.fadeUp({ stagger: 0.1 })
  },
  {
    element: `
      .section-analytics .section-heading,
      .section-analytics .analytics-item
    `,
    animation: animations.fadeUp({ stagger: 0.2 })
  },
  {
    element: ".section-preview .section-heading",
    animation: animations.fadeUp()
  },
  {
    element: ".section-preview__image",
    animation: animations.scaleIn()
  },
  {
    element: ".section-preview .preview-item",
    animation: animations.fadeUp({ stagger: 0.2 })
  },
  {
    element: `
      .section-analysis .section-heading__heading,
      .section-analysis .section-heading__description,
      .section-analysis__button
    `,
    animation: animations.fadeUp({ stagger: 0.2 })
  },
  {
    element: ".section-analysis .analysis-item",
    animation: animations.fadeUp({ stagger: 0.2 })
  },
  {
    element: ".section-analysis__image",
    animation: animations.scaleIn()
  },
  {
    element: ".section-security .section-heading",
    animation: animations.fadeUp()
  },
  {
    element: ".section-security .security-item",
    animation: animations.fadeUp({ stagger: 0.2 })
  },
  {
    element: ".section-security .item-dot",
    animation: animations.scaleIn({ stagger: 0.2, delay: 0.4 })
  },
  {
    element: `
      .section-features .section-heading__heading,
      .section-features .section-heading__description,
      .section-features__button
    `,
    animation: animations.fadeUp({ stagger: 0.2 })
  },
  {
    element: ".section-features .feature-item",
    animation: animations.fadeUp({ stagger: 0.1 })
  },
  {
    element: ".section-features__image",
    animation: animations.scaleIn()
  },
  {
    element: ".section-reviews .section-heading",
    animation: animations.fadeUp()
  },
  {
    element: ".section-reviews .reviews-slider",
    animation: animations.scaleIn()
  },
  {
    element: `
      .section-trial,
      .section-trial .section-heading__heading,
      .section-trial .section-heading__description,
      .section-trial__form
    `,
    animation: animations.fadeUp({ stagger: 0.2 })
  },
  {
    element: ".section-trial .trial-item",
    animation: animations.fadeUp({ stagger: 0.1, delay: 0.5 })
  }
];

function runAnimation() {
  animateElements.forEach((item) => {
    animateOnScroll({
      element: item.element,
      animation: item.animation
    });
  });
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