import React from "react";
import { css, useTheme } from "@emotion/react";
interface Props {
  children: React.ReactNode;
  mb: 0 | 1 | 2 | 3 | 4 | 5;
  weight?: "bold" | "bolder" | "boldest";
  color?:
    | "primary"
    | "primaryLight"
    | "primaryDark"
    | "secondary"
    | "light"
    | "dark"
    | "neutral";
}
const Heading = ({ children, mb, weight = "boldest", color }: Props) => {
  const theme = useTheme();
  return (
    <h2
      css={css`
        margin-bottom: ${theme.space[mb]}rem;
        font-size: ${theme.fontSizes.heading}rem;
        font-weight: ${theme.fontWeights[weight]};
        ${color && `color: ${theme.colors[color]}`};
        line-height: 1.15;
      `}
    >
      {children}
    </h2>
  );
};

export default Heading;
