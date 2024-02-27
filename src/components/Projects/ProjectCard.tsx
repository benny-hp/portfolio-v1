import React from "react";
import { Project } from "../../interfaces/Project";
import { Intro, SubHeading, Text } from "../ui";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { css, useTheme } from "@emotion/react";
import { motion } from "framer-motion";
import { cardItem, item } from "../../lib/animation";
interface Props {
  project: Project;
  index: number;
}
const ProjectCard = ({ project, index }: Props) => {
  const theme = useTheme();
  const { title, description, featured, github, link, techStack } = project;
  // styles
  const container = css`
    background-color: ${theme.colors.dark};
    padding: ${theme.space[3]}rem;
    border-radius: 0.4rem;
    display: flex;
    flex-direction: column;
  `;
  const icon = css`
    font-size: ${theme.fontSizes.large}rem;
    transition: color 0.4s ease-in-out;
    &:hover {
      color: ${theme.colors.primary};
    }
  `;
  const iconContainer = css`
    margin-top: 2rem;
    display: flex;
    gap: 2rem;
    align-items: center;
    color: ${theme.colors.light};
  `;
  const stackContainer = css`
    color: ${theme.colors.primaryLight};
    font-weight: ${theme.fontWeights.bold};
    font-size: 1.25rem;
    display: flex;
    flex-wrap: wrap;
  `;
  return (
    <motion.div
      css={container}
      variants={cardItem({ delay: Number(`0.${index}`) + 0.2 })}
      initial={"hidden"}
      whileInView={"visible"}
    >
      {featured && <Intro mb={1}>Featured Project</Intro>}
      <SubHeading mb={3} color={"light"}>
        {title}
      </SubHeading>
      <Text
        mb={3}
        color="neutral"
        styles={css`
          flex-grow: 1;
        `}
      >
        {description}
      </Text>
      <ul css={stackContainer}>
        {techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <div css={iconContainer}>
        {github && (
          <a css={icon} href={github} target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </a>
        )}
        {link && (
          <a css={icon} href={link} target="_blank" rel="noopener noreferrer">
            <FiExternalLink />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
