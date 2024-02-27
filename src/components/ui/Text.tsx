import React from "react";
import { css, SerializedStyles, useTheme } from "@emotion/react";
import { Variants, motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  mb: 0 | 1 | 2 | 3 | 4 | 5;
  weight?: "thin" | "body" | "bold";
  ml?: 0 | 1 | 2 | 3 | 4 | 5;
  color?:
    | "primary"
    | "primaryLight"
    | "primaryDark"
    | "secondary"
    | "light"
    | "dark"
    | "neutral";
  styles?: SerializedStyles;
  variant?: Variants;
}
const Text = ({
  children,
  mb,
  weight = "body",
  ml = 0,
  color,
  styles,
  variant,
}: Props) => {
  const theme = useTheme();
  return (
    <motion.p
      css={css`
        margin-bottom: ${theme.space[mb]}rem;
        font-size: ${theme.fontSizes.normal}rem;
        font-weight: ${theme.fontWeights[weight]};
        margin-left: ${theme.space[ml]}rem;
        ${color && `color: ${theme.colors[color]}`};
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

export default Text;
