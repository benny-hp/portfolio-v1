import { Variants } from "framer-motion";

type Delay = {
  delay: number;
};

type DelayStagger = {
  delayChildren: number;
  staggerChildren: number;
  delay?: number;
};

export const fadeLeft = (obj?: Delay): Variants => {
  return {
    hidden: { opacity: 0, x: "-50px" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ...obj,
      },
    },
  };
};

export const fadeLeftStagger = (obj?: DelayStagger): Variants => {
  return {
    hidden: { opacity: 0, x: "-50px" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ...obj,
      },
    },
  };
};

export const fadeRight = (obj?: Delay): Variants => {
  return {
    hidden: { opacity: 0, x: "50px" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ...obj,
      },
    },
  };
};

export const fadeRightStagger = (obj?: DelayStagger): Variants => {
  return {
    hidden: { opacity: 0, x: "50px" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ...obj,
      },
    },
  };
};

export function item() {
  return {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
}
