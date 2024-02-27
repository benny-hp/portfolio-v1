import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";

const Header = () => {
  const theme = useTheme();

  const navLinkStyles = css`
    font-size: ${theme.fontSizes.normal}rem;
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.light};
    transition: color 0.2s ease-in-out;
    &:hover {
      color: ${theme.colors.primaryLight};
    }
  `;

  return (
    <header
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 32px 16px;
        max-width: 1600px;
        margin: auto;
        z-index: 2;
        position: relative;
      `}
    >
      <Link
        href="/"
        css={css`
          text-transform: uppercase;
          color: ${theme.colors.light};
          font-size: ${theme.fontSizes.heading}rem;
          font-weight: ${theme.fontWeights.bolder};
          transition: color 0.2s ease-in-out;
          &:hover {
            color: ${theme.colors.primaryLight};
          }
        `}
        passHref
      >
        be
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/#home" css={navLinkStyles} passHref>
              Home
            </Link>
          </li>
          <li>
            <Link href="/#about" css={navLinkStyles} passHref>
              About
            </Link>
          </li>
          <li>
            <Link href="/#projects" css={navLinkStyles} passHref>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/#contact" css={navLinkStyles} passHref>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Logo = styled.a`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fontSizes.heading}rem;
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const NavLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.normal}rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.light};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

export default Header;
