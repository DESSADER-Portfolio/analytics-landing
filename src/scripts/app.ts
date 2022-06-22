import { Navbar, Preloader } from "@components/js";
import { scroll } from "@src/scripts/scrollReveal";

const preloader = new Preloader(".preloader");

function runAnimation(): void {
  scroll.reveal(".navbar", { origin: "top", distance: "0px" });
  scroll.reveal(".footer", { distance: "0px" });
}

new Navbar(".menu", {
  control: ".menu-control",
  onChange: (menuIsOpen) => menuIsOpen
});

window.addEventListener("load", () => {
  preloader.hide(() => {
    runAnimation();
    document.body.classList.remove("no-scroll");
  });
});