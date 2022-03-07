import { css, useTheme } from "@emotion/react";
import { Project } from "../../interfaces/Project";
import { Heading, Text } from "../ui";
import ProjectsList from "./ProjectsList";

const projects: Project[] = [
  {
    title: "Skyline Media Marketing",
    description:
      "Skyline Media Marketing is a digital marketing and branding company located in New York. They came to me looking for a website for their company that used the latest technology. I made this website using React, Gatsby, Style-components, and Netlify CMS for git-based content management.",
    featured: true,
    techStack: ["React", "Gatsby", "Emotion.js", "Netlify CMS"],
    github: "",
    link: "https://skyline-mediamarketing.com/",
  },
];

const Portfolio = () => {
  const theme = useTheme();
  return (
    <div
      css={css`
        background-color: ${theme.colors.secondary};
        margin-left: -${theme.space[1]}rem;
        margin-right: -${theme.space[1]}rem;
      `}
    >
      <section
        css={css`
          max-width: 1400px;
          padding: ${theme.space[6]}rem 0;
          margin: 0 ${theme.space[1]}rem;
          ${theme.mq()[4]} {
            margin: auto;
          }
        `}
        id="projects"
      >
        <Heading mb={4}>Client Projects</Heading>
        <Text mb={3}>
          Showcasing complete client projects built from the ground up with the
          most up to date technologies to ensure the greatest level of
          performance.
        </Text>
        <ProjectsList projects={projects} />
      </section>
    </div>
  );
};

export default Portfolio;
