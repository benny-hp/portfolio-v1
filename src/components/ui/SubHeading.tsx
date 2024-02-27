import React from "react";
import { css, useTheme } from "@emotion/react";
import { Variants, motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  mb: 0 | 1 | 2 | 3 | 4 | 5;
  weight?: "thin" | "body" | "bold" | "bolder";
  color?:
    | "primary"
    | "primaryLight"
    | "primaryDark"
    | "secondary"
    | "light"
    | "dark"
    | "neutral";
  variant?: Variants;
}
const SubHeading = ({
  children,
  mb,
  weight = "bolder",
  color,
  variant,
}: Props) => {
  const theme = useTheme();

  return (
    <motion.h3
      css={css`
        margin-bottom: ${theme.space[mb]}rem;
        font-size: ${theme.fontSizes.large}rem;
        color: ${theme.colors.dark};
        font-weight: ${theme.fontWeights[weight]};
        ${color && `color: ${theme.colors[color]}`};
        line-height: 1.3;
      `}
      variants={variant}
      initial={"hidden"}
      whileInView={"visible"}
    >
      {children}
    </motion.h3>
  );
};

export default SubHeading;
