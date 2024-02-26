import React from "react";
import { css, ThemeContext, useTheme } from "@emotion/react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  mt?: 0 | 1 | 2 | 3 | 4 | 5;
  href?: string;
  variant?: "outline";
  ml?: 0 | 1 | 2 | 3 | 4 | 5;
  cta?: boolean;
  type?: "submit";
  target?: "_blank";
}
const Button = ({
  children,
  mt = 3,
  href,
  variant,
  ml = 0,
  cta,
  type,
  target,
}: Props) => {
  const theme = useTheme();
  const linkButtonStyles = css`
    padding: ${theme.space[1]}rem ${theme.space[4]}rem;

    margin-left: ${theme.space[ml]}rem;
    font-size: ${theme.fontSizes.normal}rem;
    background-color: ${variant === "outline"
      ? "transparent"
      : theme.colors.primary};
    border: solid ${theme.colors.primary} 2px;
    border-radius: 0.4rem;
    display: inline-block;
    margin-top: ${theme.space[mt]}rem;
    color: ${theme.colors.light};
    color: ${variant === "outline" ? theme.colors.primary : theme.colors.light};
    transition: background-color 0.3s ease-out, color 0.3s ease-out;
    font-weight: ${theme.fontWeights.bold};
    letter-spacing: 0.75px;
    cursor: pointer;

    &:hover {
      background-color: ${variant === "outline"
        ? theme.colors.primary
        : "transparent"};
      color: ${variant === "outline"
        ? theme.colors.light
        : theme.colors.primary};
      color: ${cta && `${theme.colors.light}`};
    }
  `;
  if (type === "submit") {
    return (
      <button css={linkButtonStyles} type="submit">
        {children}
      </button>
    );
  }

  return (
    <Link href={href as string} passHref>
      <a css={linkButtonStyles} target={target ?? "_self"}>
        {children}
      </a>
    </Link>
  );
};

export default Button;
