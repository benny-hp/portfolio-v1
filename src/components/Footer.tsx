import { css, useTheme } from "@emotion/react";
import React from "react";
import { FiTwitter, FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
const Footer = () => {
  const theme = useTheme();
  return (
    <footer
      css={css`
        background-color: ${theme.colors.dark};
        padding: ${theme.space[2]}rem ${theme.space[1]}rem;
        text-align: center;
        color: ${theme.colors.light};
      `}
    >
      <ul
        css={css`
          justify-content: center;
          font-size: ${theme.fontSizes.normal}rem;
          margin-bottom: ${theme.space[1]}rem;
          gap: ${theme.space[2]}rem;
        `}
      >
        <li>
          <a href="https://github.com/Nomad-Freedom">
            <FiGithub />
          </a>
        </li>
        <li>
          <a href="mailto:inquiry@bennyhernandez.com">
            <FiMail />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/benny-hernandez/">
            <FiLinkedin />
          </a>
        </li>
      </ul>
      <p>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://www.gatsbyjs.com">Benny Hernandez</a>
      </p>
    </footer>
  );
};

export default Footer;
