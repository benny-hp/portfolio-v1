import { Variants } from "framer-motion";

type Delay = {
  delay: number;
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
