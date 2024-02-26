import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";

const Header = () => {
  return (
    <header
      css={css`
        display: flex;
        align-items: center;
        padding: 32px 16px;
        max-width: 1600px;
        margin: auto;
      `}
    >
      <Link href="/" passHref>
        <Logo>be</Logo>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/#home" passHref>
              <NavLink>Home</NavLink>
            </Link>
          </li>
          <li>
            <Link href="/#about" passHref>
              <NavLink>About</NavLink>
            </Link>
          </li>
          <li>
            <Link href="/#projects" passHref>
              <NavLink>Projects</NavLink>
            </Link>
          </li>
          <li>
            <Link href="/#contact" passHref>
              <NavLink>Contact</NavLink>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Logo = styled.a`
  flex-grow: 1;
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
