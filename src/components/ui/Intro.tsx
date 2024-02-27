import { css, SerializedStyles, useTheme } from "@emotion/react";
import React from "react";
import { motion, Transition, Variants } from "framer-motion";
interface Props {
  children: React.ReactNode;
  mb: 0 | 1 | 2 | 3 | 4 | 5;
  styles?: SerializedStyles;
  variant?: Variants;
}

const Intro = ({ children, mb, styles, variant }: Props) => {
  const theme = useTheme();
  return (
    <motion.p
      css={css`
        color: ${theme.colors.primary};
        font-weight: ${theme.fontWeights.bold};
        margin-bottom: ${theme.space[mb]}rem;
        ${styles}
      `}
      variants={variant}
      initial={"hidden"}
      whileInView={"visible"}
    >
      {children}
    </motion.p>
  );
};

export default Intro;
