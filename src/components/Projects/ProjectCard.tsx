import React from "react";
import { Project } from "../../interfaces/Project";
import { Intro, SubHeading, Text } from "../ui";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { css, useTheme } from "@emotion/react";
interface Props {
  project: Project;
}
const ProjectCard = ({ project }: Props) => {
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
    font-size: ${theme.fontSizes.normal}rem;
  `;
  const iconContainer = css`
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    color: ${theme.colors.light};
  `;
  const stackContainer = css`
    color: ${theme.colors.neutral};
    display: flex;
    flex-wrap: wrap;
  `;
  return (
    <div css={container}>
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

        <a css={icon} href={link} target="_blank" rel="noopener noreferrer">
          <FiExternalLink />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
