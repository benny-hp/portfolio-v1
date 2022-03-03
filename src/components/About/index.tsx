import { css, useTheme } from "@emotion/react";
import { FlexContainer } from "../ui";
import AboutMe from "./AboutMe";
import MySkills from "./MySkills";
const Index = () => {
  const theme = useTheme();
  return (
    <FlexContainer
      styles={css`
        flex-direction: column;
        max-width: 1400px;
        margin: auto;
        padding-top: ${theme.space[6]}rem;
        padding-bottom: ${theme.space[6]}rem;
        ${theme.mq()[2]} {
          flex-direction: row;
          justify-content: space-between;
        }
      `}
    >
      <AboutMe />
      <MySkills />
    </FlexContainer>
  );
};

export default Index;
