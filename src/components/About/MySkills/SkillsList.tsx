import { css, useTheme } from "@emotion/react";
import React from "react";
import { BiRightArrow } from "react-icons/bi";
interface Skill {
  name: string;
}
interface Props {
  data: Skill[];
}
const SkillsList = ({ data }: Props) => {
  const theme = useTheme();
  return (
    <ul
      css={css`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-bottom: ${theme.space[3]}rem;
        font-size: ${theme.fontSizes.normal}rem;
      `}
    >
      {data.map(({ name }, index) => (
        <li key={index}>
          <BiRightArrow
            css={css`
              font-size: ${theme.fontSizes.medium}rem;
              margin-right: 1rem;
              color: ${theme.colors.primary};
            `}
          />
          {name}
        </li>
      ))}
    </ul>
  );
};

export default SkillsList;
