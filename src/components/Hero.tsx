import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Intro, Button } from "../components/ui";

const Hero = () => {
  const theme = useTheme();
  return (
    <Container>
      <div>
        <Intro
          mb={1}
          styles={css`
            ${theme.mq()[2]} {
              font-size: 2.4rem;
            }
          `}
        >
          Hi, my name is
        </Intro>
        <HeroHeading>
          Benny{" "}
          <span
            css={css`
              color: ${theme.colors.primaryLight};
            `}
          >
            Hernandez
          </span>
        </HeroHeading>
        <HeroSubHeading>Full Stack Developer</HeroSubHeading>
        <Text>
          I’m a software engineer specializing in building (full stack web
          applications) .
        </Text>

        <Button href="/#about">Learn More</Button>
      </div>
    </Container>
  );
};

export default Hero;

const HeroHeading = styled.h2`
  font-size: 8rem;
  font-weight: 900;
  display: inline-flex;
  color: ${({ theme }) => theme.colors.primary};
  flex-direction: column;
  text-transform: uppercase;
  /* letter-spacing: 4px; */
  span {
    font-size: 5rem;
    color: ${({ theme }) => theme.colors.light};
    margin-bottom: ${({ theme }) => theme.space[1]}rem;
    letter-spacing: 1.25px;
  }
  ${({ theme }) => theme.mq()[2]} {
    font-size: 12rem;
    span {
      font-size: 7.5rem;
    }
  ${({ theme }) => theme.mq()[4]} {
    display:block;
    font-size: 10rem;
    span {
      font-size: 10rem;
    }
  }
`;
const HeroSubHeading = styled.h1`
  color: ${({ theme }) => theme.colors.light};
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
  margin-bottom: ${({ theme }) => theme.space[2]}rem;
  ${({ theme }) => theme.mq()[2]} {
    font-size: 3rem;
  }
`;
const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1400px;
  margin: auto;
  min-height: calc(100vh - 98.5px);
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large}rem;
  color: ${({ theme }) => theme.colors.light};
  // max-width: 40ch;
`;
