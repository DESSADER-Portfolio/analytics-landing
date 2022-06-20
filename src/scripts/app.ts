import { Navbar } from "@components/js";
import { scroll } from "@src/scripts/scrollReveal";

function runAnimation(): void {
  scroll.reveal(".navbar", { origin: "top", distance: "0px" });
  scroll.reveal(".footer", { distance: "0px" });
}

new Navbar(".menu", {
  control: ".menu-control",
  onChange: (menuIsOpen) => menuIsOpen
});

window.addEventListener("load", () => {
  runAnimation();
});