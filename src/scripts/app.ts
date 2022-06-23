import { Navbar, Preloader } from "@components/js";
import { Animations, animateOnScroll } from "@src/scripts/animations";
import { Expo } from "gsap";

export const animations: Animations = new Animations({
  duration: 1,
  ease: Expo.easeOut
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