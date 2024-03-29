import { css, useTheme } from "@emotion/react";
import React from "react";
import { Button, Heading, Text } from "./ui";
import { fadeLeft, fadeRight } from "../lib/animation";

const Cto = () => {
  const theme = useTheme();
  return (
    <section
      css={css`
        background-color: ${theme.colors.dark};
        margin-left: -${theme.space[3]}rem;
        margin-right: -${theme.space[3]}rem;
        padding-left: ${theme.space[3]}rem;
        padding-right: ${theme.space[3]}rem;
      `}
    >
      <div
        css={css`
          max-width: 1400px;
          /* margin: 0 ${theme.space[1]}rem; */
          padding: ${theme.space[6]}rem 0;
          ${theme.mq()[2]} {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          ${theme.mq()[4]} {
            margin: auto;
          }
        `}
      >
        <div>
          <Heading mb={2} color="light" variant={fadeLeft({ delay: 0.1 })}>
            Let&apos;s work together
          </Heading>
          <Text
            mb={4}
            color="neutral"
            styles={css`
              ${theme.mq()[2]} {
                margin-bottom: 0;
              }
            `}
            variant={fadeLeft({ delay: 0.2 })}
          >
            I am available for fulltime or freelance projects. Hire me and get
            your project done.
          </Text>
        </div>
        <Button href="#contact" mt={0} cta mVariant={fadeRight({ delay: 0.3 })}>
          Contact Me
        </Button>
      </div>
    </section>
  );
};

export default Cto;
