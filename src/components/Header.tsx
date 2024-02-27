import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { boolean } from "yup";
type MobileNavProps = {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
};
const MobileNav = ({ toggle, setToggle }: MobileNavProps) => {
  const theme = useTheme();
  const borderBottom = css`
    border-bottom: solid 2px #28282f;
  `;
  const navLinkStyles = css`
    font-size: ${theme.fontSizes.normal}rem;
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.light};
    transition: color 0.2s ease-in-out;
    display: block;
    padding: 1rem 0;
    letter-spacing: 1.5px;
    &:hover {
      color: ${theme.colors.primaryLight};
    }
  `;
  const navItemStyles = css``;
  return (
    <nav
      css={css`
        display: block;
        position: fixed;
        right: 0;
        height: 100dvh;
        width: 100%;
        background-color: ${theme.colors.dark};
        transform: ${toggle ? `translateX(0)` : `translateX(100%)`};
        transition: all 0.5s ease-in-out;
        top: 0;
        ${theme.mq()[2]} {
          display: none;
        }
      `}
    >
      <ul
        css={css`
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-top: 9.4rem;
          padding-top: 4rem;
          text-align: center;

          border-top: solid 4px #28282f;
        `}
      >
        <li
          css={css`
            ${navItemStyles}
            ${borderBottom}
          `}
        >
          <Link
            href="/#home"
            css={navLinkStyles}
            onClick={() => setToggle(!toggle)}
            passHref
          >
            Home
          </Link>
        </li>
        <li
          css={css`
            ${navItemStyles}
            ${borderBottom}
          `}
        >
          <Link
            href="/#about"
            css={navLinkStyles}
            onClick={() => setToggle(!toggle)}
            passHref
          >
            About
          </Link>
        </li>
        <li
          css={css`
            ${navItemStyles}
            ${borderBottom}
          `}
        >
          <Link
            href="/#projects"
            css={navLinkStyles}
            onClick={() => setToggle(!toggle)}
            passHref
          >
            Projects
          </Link>
        </li>
        <li
          css={css`
            ${navItemStyles}
            ${borderBottom}
          `}
        >
          <Link
            href="/#contact"
            css={navLinkStyles}
            onClick={() => setToggle(!toggle)}
            passHref
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const Header = () => {
  const theme = useTheme();
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (toggle) {
      // document.body.style.overflowY = "hidden";
      document.body.style.overflowY = "hidden";
    }

    return () => {
      document.body.style.overflowY = "visible";
    };
  }, [toggle]);

  const navLinkStyles = css`
    font-size: ${theme.fontSizes.normal}rem;
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.light};
    transition: color 0.2s ease-in-out;
    letter-spacing: 1.5px;
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
        z-index: 2000;
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
          z-index: 2001;
          &:hover {
            color: ${theme.colors.primaryLight};
          }
        `}
        passHref
      >
        be
      </Link>
      <nav
        css={css`
          display: none;
          ${theme.mq()[2]} {
            display: block;
          }
        `}
      >
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
      <FiMenu
        css={css`
          font-size: 2.8rem;
          transition: color 0.4s ease-in-out;
          z-index: 2001;
          cursor: pointer;
          ${theme.mq()[2]} {
            display: none;
          }
          color: ${theme.colors.light};
          &:hover {
            color: ${theme.colors.primary};
          }
        `}
        onClick={() => setToggle(!toggle)}
      />
      <MobileNav toggle={toggle} setToggle={setToggle} />
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
