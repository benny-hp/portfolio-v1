import { css, useTheme } from "@emotion/react";
import React from "react";
import { BiRightArrow } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeRight, fadeRightStagger, item } from "../../../lib/animation";
interface Skill {
  name: string;
}
interface Props {
  data: Skill[];
}
const SkillsList = ({ data }: Props) => {
  const theme = useTheme();
  return (
    <motion.ul
      css={css`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-bottom: ${theme.space[3]}rem;
        font-size: ${theme.fontSizes.normal}rem;
      `}
      variants={fadeRightStagger({ delayChildren: 0.3, staggerChildren: 0.2 })}
      initial={"hidden"}
      whileInView={"visible"}
    >
      {data.map(({ name }, index) => (
        <motion.li
          key={index}
          css={css`
            color: ${theme.colors.neutral};
          `}
          variants={item()}
        >
          <BiRightArrow
            css={css`
              font-size: ${theme.fontSizes.medium}rem;
              margin-right: 1rem;
              color: ${theme.colors.primary};
            `}
          />
          {name}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default SkillsList;
