import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Intro, Button } from "../components/ui";
import { fadeLeft } from "../lib/animation";
import { motion } from "framer-motion";

const Hero = () => {
  const theme = useTheme();

  return (
    <Container>
      <div
        css={css`
          z-index: 230;
        `}
      >
        <Intro
          mb={1}
          styles={css`
            ${theme.mq()[2]} {
              font-size: 2.4rem;
            }
          `}
          variant={fadeLeft({ delay: 0.1 })}
        >
          Hi, my name is
        </Intro>
        <HeroHeading
          variants={fadeLeft({ delay: 0.2 })}
          initial={"hidden"}
          whileInView={"visible"}
        >
          Benny{" "}
          <span
            css={css`
              color: ${theme.colors.primaryLight};
            `}
          >
            Hernandez
          </span>
        </HeroHeading>
        <HeroSubHeading
          variants={fadeLeft({ delay: 0.3 })}
          initial={"hidden"}
          whileInView={"visible"}
        >
          Full Stack Developer
        </HeroSubHeading>
        <Text
          variants={fadeLeft({ delay: 0.4 })}
          initial={"hidden"}
          whileInView={"visible"}
        >
          I’m a software engineer specializing in building (full stack web
          applications) .
        </Text>

        <Button href="/#about" mVariant={fadeLeft({ delay: 0.5 })}>
          Learn More
        </Button>
      </div>
    </Container>
  );
};

export default Hero;

const HeroHeading = styled(motion.h2)`
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
  }

  ${({ theme }) => theme.mq()[4]} {
    display: block;
    font-size: 10rem;
    span {
      font-size: 10rem;
    }
  }
`;
const HeroSubHeading = styled(motion.h1)`
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

const Text = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.large}rem;
  color: ${({ theme }) => theme.colors.light};
  // max-width: 40ch;
`;
