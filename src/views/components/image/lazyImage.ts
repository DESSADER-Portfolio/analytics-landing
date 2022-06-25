export type ObserverOptions = {
  root?: HTMLElement;
  rootMargin?: string;
  threshold?: number | number[];
}

export interface LazyOptions extends ObserverOptions {
  onLoad?: (node: HTMLImageElement) => void;
}

export interface ILazyImage {
  image: HTMLImageElement;
  options?: LazyOptions; 
}

class LazyImage implements ILazyImage {
  public readonly image: HTMLImageElement;
  public readonly options?: LazyOptions;
  public static readonly defaultRootMargin = "0px 0px 0px 0px";

  private root?: HTMLElement;
  private rootMargin?: string;
  private threshold?: number | number[];
  private onLoad?: (node: HTMLImageElement) => void;

  private observer: IntersectionObserver;
  private observerOptions: ObserverOptions;

  constructor(image: HTMLImageElement, options?: LazyOptions) {
    const { 
      root, 
      rootMargin, 
      threshold, 
      onLoad 
    } = options || {};

    this.image = image;
    this.root = root;
    this.rootMargin = rootMargin || LazyImage.defaultRootMargin;
    this.threshold = threshold ?? 1;
    this.onLoad = onLoad;

    this.observerOptions = {
      root: this.root,
      rootMargin: this.rootMargin,
      threshold: this.threshold
    };

    this.observer = new IntersectionObserver(
      (entries, observer) => this.observerCallback(entries, observer, this.onLoad),
      this.observerOptions
    );

    this.observer.observe(this.image);
  }

  private observerCallback(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
    onLoad: (node: HTMLImageElement) => void
  ): void {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if(entry.isIntersecting) {
        const target = entry.target as HTMLImageElement;
        const src = target.getAttribute("data-src");
        target.src = src;
        observer.unobserve(target);
        onLoad?.(target);
      }
    });
  }
}

export default LazyImage;