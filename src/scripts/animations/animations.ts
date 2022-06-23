import { IAnimation } from "./IAnimation";

export type DefaultOptions = Record<string, unknown>;

export interface IAnimations {
  defaultOptions?: DefaultOptions;
}

class Animations implements IAnimations {
  public defaultOptions: DefaultOptions;

  constructor(defaultOptions?: DefaultOptions) {
    this.defaultOptions = defaultOptions || {};
  }

  public fadeUp(options?: Record<string, unknown>): IAnimation {
    return {
      from: { 
        opacity: 0, 
        y: 20
      },
      to: { 
        opacity: 1, 
        y: 0, 
        ...this.defaultOptions,
        ...options
      }
    };
  }

  public fadeIn(options?: Record<string, unknown>): IAnimation {
    return {
      from: { 
        opacity: 0
      },
      to: { 
        opacity: 1,
        ...this.defaultOptions,
        ...options
      }
    };
  }

  public scaleIn(options?: Record<string, unknown>): IAnimation {
    return {
      from: {
        opacity: 0,
        scale: 0.95
      },
      to: {
        opacity: 1,
        scale: 1,
        ...this.defaultOptions,
        ...options
      }
    };
  } 
}

export default Animations;