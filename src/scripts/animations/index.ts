import Animations from "./animations";
import { Expo } from "gsap";

export { animateOnScroll } from "./animateOnScroll";
export const animations: Animations = new Animations({
  duration: 1,
  ease: Expo.easeOut
});