import { Navbar, Preloader, LazyImage } from "@components/js";
import { animations, animateOnScroll } from "@src/scripts/animations";

const lazyImages = document.querySelectorAll("[data-lazy-img]");

lazyImages.forEach((image) => {
  new LazyImage(image as HTMLImageElement, {
    rootMargin: "200px 0px 200px 0px",
    onLoad: (node) => node
  });
});

const animateElements = [
  {
    element: ".navbar",
    animation: animations.fadeIn()
  },
  {
    element: ".footer",
    animation: animations.fadeIn()
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

const preloader = new Preloader(".preloader");

new Navbar(".menu", {
  control: ".menu-control",
  onChange: (menuIsOpen) => menuIsOpen
});

window.addEventListener("load", () => {
  preloader.hide(() => {
    document.body.classList.remove("no-scroll");
  });
  runAnimation();
});