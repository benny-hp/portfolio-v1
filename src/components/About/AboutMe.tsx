import React from "react";
import { Button, Heading, Intro, SubHeading, Text } from "../ui";
import { css, useTheme } from "@emotion/react";
import { fadeLeft, fadeLeftStagger, item } from "../../lib/animation";
import { motion } from "framer-motion";

const AboutMe = () => {
  const theme = useTheme();
  const spanBase = css`
    font-weight: ${theme.fontWeights.body};
    margin-left: ${theme.space[1]}rem;
    font-size: ${theme.fontSizes.normal}rem;
    color: ${theme.colors.neutral};
  `;
  return (
    <article
      css={css`
        margin-bottom: ${theme.space[6]}rem;
        ${theme.mq()[2]} {
          max-width: 50%;
          margin-bottom: 0;
        }
      `}
    >
      <Heading mb={4} color="light" variant={fadeLeft({ delay: 0.1 })}>
        About Me
      </Heading>
      <Intro mb={1} variant={fadeLeft({ delay: 0.2 })}>
        Who am i?
      </Intro>
      <SubHeading mb={2} color="light" variant={fadeLeft({ delay: 0.3 })}>
        I&apos;m Benny Hernandez, a FullStack Web Developer
      </SubHeading>
      <Text mb={2} color="neutral" variant={fadeLeft({ delay: 0.4 })}>
        I am a software developer based in the United States with more than 5
        years of experience in the tech industry and 1 year of experience
        developing advanced websites and web applications. What makes me
        passionate about software development is, having the ability to
        transform business requirements into useful software that helps people
        achieve their goals. Take a look at my portfolio work and lets see if we
        can work together on your next project.
      </Text>
      <motion.div
        css={css`
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          border-top: solid rgba(0, 0, 0, 0.5) 1px;
          padding-top: ${theme.space[3]}rem;
        `}
        variants={fadeLeftStagger({ delayChildren: 0.3, staggerChildren: 0.2 })}
        initial={"hidden"}
        whileInView={"visible"}
      >
        <motion.div variants={item()}>
          <Text mb={2} weight="bold" color="light">
            Name: <span css={spanBase}>Benny Hernandez</span>
          </Text>
        </motion.div>
        <motion.div
          css={css`
            justify-self: center;
          `}
          variants={item()}
        >
          <Text mb={2} weight="bold" color="light">
            From: <span css={spanBase}>Miami, Fl</span>
          </Text>
        </motion.div>
        <motion.div
          css={css`
            grid-column: 1 / -1;
          `}
          variants={item()}
        >
          <Text mb={2} weight="bold" color="light">
            Email:{" "}
            <a
              href="mailto:inquiry@bennyhernandez.com"
              css={css`
                ${spanBase}
                color: ${theme.colors.primary};
                font-weight: ${theme.fontWeights.bold};
              `}
            >
              inquiry@bennyhernandez.com
            </a>
          </Text>
        </motion.div>
      </motion.div>
      <div
        css={css`
          display: flex;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 2rem;
        `}
      >
        <Button
          href="/resume.pdf"
          target="_blank"
          myCss={css`
            padding: ${theme.space[1]}rem ${theme.space[2]}rem;
            ${theme.mq()[0]} {
              padding: ${theme.space[1]}rem ${theme.space[4]}rem;
            }
          `}
          mVariant={fadeLeft({ delay: 0.5 })}
        >
          Download Resume
        </Button>
        <Button
          variant="outline"
          href="/#projects"
          ml={2}
          myCss={css`
            padding: ${theme.space[1]}rem ${theme.space[2]}rem;
            margin: 0;
            ${theme.mq()[0]} {
              padding: ${theme.space[1]}rem ${theme.space[4]}rem;
            }
          `}
          mVariant={fadeLeft({ delay: 0.55 })}
        >
          My Work
        </Button>
      </div>
    </article>
  );
};

export default AboutMe;
