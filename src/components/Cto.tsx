import { css, useTheme } from "@emotion/react";
import React from "react";
import { Button, Heading, Text } from "./ui";

const Cto = () => {
  const theme = useTheme();
  return (
    <section
      css={css`
        background-color: ${theme.colors.dark};
        margin-left: -${theme.space[1]}rem;
        margin-right: -${theme.space[1]}rem;
      `}
    >
      <div
        css={css`
          max-width: 1400px;
          margin: 0 ${theme.space[1]}rem;
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
          <Heading mb={2} color="light">
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
          >
            I am available for fulltime or freelance projects. Hire me and get
            your project done.
          </Text>
        </div>
        <Button href="#contact" mt={0} cta>
          Hire Me
        </Button>
      </div>
    </section>
  );
};

export default Cto;
