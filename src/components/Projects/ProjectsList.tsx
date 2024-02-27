import { css, useTheme } from "@emotion/react";
import React from "react";
import { motion } from "framer-motion";
import { Project } from "../../interfaces/Project";
import ProjectCard from "./ProjectCard";
import { fadeLeftStagger, fadeRightStagger } from "../../lib/animation";
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
    <motion.div
      css={gridContainer}
      // variants={fadeLeftStagger({ delayChildren: 0.3, staggerChildren: 0.2 })}
      // initial={"hidden"}
      // whileInView={"visible"}
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </motion.div>
  );
};

export default ProjectsList;
