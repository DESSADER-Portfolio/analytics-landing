import { IAnimation } from "./IAnimation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateOnScroll({
  element, 
  animation, 
  scrollOptions
} : {
  element: string, 
  animation: IAnimation, 
  scrollOptions?: Record<string, unknown>
}): void {
  ScrollTrigger.create({
    trigger: element,
    animation: gsap.fromTo(
      element, 
      { ...animation.from }, 
      { ...animation.to }
    ),
    ...scrollOptions
  });
}