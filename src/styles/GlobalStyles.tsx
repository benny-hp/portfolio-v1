import { css, Global } from "@emotion/react";
import { theme } from "./theme";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: ${theme.fonts.body};
        }
        body {
          overflow-x: hidden;
        }
        html {
          font-size: 62.5%;
          scroll-behavior: smooth;
        }
        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${theme.fonts.heading};
          line-height: ${theme.lineHeights.heading};
          letter-spacing: ${theme.letterSpacing.heading}rem;
          margin: 0;
        }
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          gap: ${theme.space[1]}rem;
        }
        p {
          margin: 0;
          font-size: ${theme.fontSizes.normal}rem;
          line-height: ${theme.lineHeights.body};
        }
      `}
    />
  );
};

export default GlobalStyles;
