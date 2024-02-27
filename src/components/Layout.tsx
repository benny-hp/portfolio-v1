import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/legacy/image";

import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const theme = useTheme();
  return (
    <>
      <div
        css={css`
          position: absolute;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          z-index: 1;
          background-color: ${theme.colors.dark};
        `}
      >
        <Image
          alt="hero image"
          src="/ursa-bavcar-6O4zf9lga6Q-unsplash.jpg"
          layout="fill"
          objectFit="cover"
          quality={75}
          priority={true}
          css={css`
            filter: grayscale(100%) opacity(15%);
          `}
        />
      </div>
      <Header />

      <Main>{children}</Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  padding: 0 ${({ theme }) => theme.space[3]}rem;
  margin: auto;
  background-color: #28282f;
`;

export default Layout;
