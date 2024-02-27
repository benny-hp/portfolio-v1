import { css, useTheme } from "@emotion/react";
import React from "react";
import ContactForm from "./ContactForm";
import { Button, Heading, Intro, Text } from "./ui";
import { fadeLeft } from "../lib/animation";

const Contact = () => {
  const theme = useTheme();
  return (
    <section
      css={css`
        max-width: 1400px;
        text-align: center;
        padding: ${theme.space[6]}rem 0;
        margin: auto;
        position: relative;
      `}
      id="contact"
    >
      <Intro mb={1} variant={fadeLeft({ delay: 0.1 })}>
        What&apos;s Next?
      </Intro>
      <Heading mb={2} color="light" variant={fadeLeft({ delay: 0.2 })}>
        Get In Touch
      </Heading>
      <Text
        mb={0}
        styles={css`
          max-width: 500px;
          margin: auto;
          margin-bottom: ${theme.space[4]}rem;
        `}
        color="neutral"
        variant={fadeLeft({ delay: 0.3 })}
      >
        Currently looking for any new opportunities. Whether you have a question
        or just want to say hi, I&apos;ll try my best to get back to you!
      </Text>
      <ContactForm />
    </section>
  );
};

export default Contact;
