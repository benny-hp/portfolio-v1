import { css, useTheme } from "@emotion/react";
import React from "react";
import { Project } from "../../interfaces/Project";
import ProjectCard from "./ProjectCard";
interface Props {
  projects: Project[];
}
const ProjectsList = ({ projects = [] }: Props) => {
  const theme = useTheme();
  const gridContainer = css`
    display: grid;
    grid-gap: 2rem;
    ${theme.mq()[0]} {
      grid-template-columns: repeat(2, 1fr);
    }
    ${theme.mq()[2]} {
      grid-template-columns: repeat(3, 1fr);
    }
  `;
  return (
    <div css={gridContainer}>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
