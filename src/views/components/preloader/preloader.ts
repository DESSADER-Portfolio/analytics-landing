export interface IPreloader {
  element: string;
}

class Preloader implements IPreloader {
  public element: string;
  private preloader: HTMLElement;

  constructor(element: string) {
    this.preloader = document.querySelector(element);
  }

  public show(callback?: () => void) {
    this.preloader.classList.remove("display-none");
    this.preloader.classList.add("display-flex");
    this.preloader.classList.add("preloader:animation-fade-in");

    this.preloader.addEventListener("animationend", () => {
      this.preloader.classList.remove("preloader:animation-fade-in");
      this.preloader.classList.remove("display-none");

      callback?.();
    }, { once: true });
  }

  public hide(callback?: () => void) {
    this.preloader.classList.add("preloader:animation-fade-out");

    this.preloader.addEventListener("animationend", () => {
      this.preloader.classList.remove("preloader:animation-fade-out");
      this.preloader.classList.remove("display-flex");
      this.preloader.classList.add("display-none");

      callback?.();
    }, { once: true });
  }
}

export default Preloader;