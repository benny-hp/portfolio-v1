import { css, SerializedStyles } from "@emotion/react";
import React from "react";

interface Props {
  children: React.ReactNode;
  styles?: SerializedStyles;
}

const FlexContainer = ({ children, styles }: Props) => {
  return (
    <section
      css={css`
        display: flex;
        ${styles}
      `}
      id="about"
    >
      {children}
    </section>
  );
};

export default FlexContainer;
