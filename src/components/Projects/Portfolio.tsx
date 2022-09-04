import { css, useTheme } from "@emotion/react";
import React from "react";
import { Project } from "../../interfaces/Project";
import { Heading, Text } from "../ui";
import ProjectsList from "./ProjectsList";

const projects: Project[] = [
  {
    title: "CoinFolio",
    description:
      "CoinFolio is a full-stack cryptocurrency web application design to help users track their favorite coins and get a 7 days snapshot of the price. The app was build with next-auth, prisma, google provider for authentication, and trpc as a wrapper for serverless functions. The ui was build with tailwind for theming and dark and light mode.",
    featured: true,
    techStack: [
      "React",
      "Typescript",
      "Next.js",
      "Trpc",
      "Node",
      "Prisma",
      "PostgreSQL",
    ],
    github: "https://github.com/Nomad-Freedom/coinfolio",
    link: "https://coinfolio-plum.vercel.app/",
  },
  {
    title: "Popcorn Tracker",
    description:
      "Popcorn tracker is a full-stack movie tracking application that allows users to search movies and save them as watched or want to watch. The front-end was built using Typescript, React, Material UI. The back-end was built using Node, Nest.js, Typescript, and Postgres.",
    featured: true,
    techStack: [
      "React",
      "Typescript",
      "Material UI",
      "Next.js",
      "Node",
      "Nest.js",
      "PostgreSQL",
    ],
    github: "https://github.com/Nomad-Freedom/-popcorn-tracker-web",
    link: "https://popcorn-tracker-web.vercel.app",
  },
  {
    title: "Sticky Notes",
    description:
      "Sticky notes is a full-stack note taking web application heavily inspired by the Microsoft sticky notes mobile app which allows users to create, update, and delete notes. The front-end was built using Typescript, React, Material UI. The back-end was built using Node, Nest.js, Typescript, and Postgres.",
    featured: true,
    techStack: [
      "React",
      "Typescript",
      "Material UI",
      "Next.js",
      "Node",
      "Nest.js",
      "PostgreSQL",
    ],
    github: "https://github.com/Nomad-Freedom/sticky-notes-web",
    link: "https://sticky-notes-web.vercel.app/",
  },
  {
    title: "Portfolio Site - V1",
    description:
      "My portfolio was built to showcase projects and information that you might want to know about me. It includes a download link to my resume, featured projects, as well as a contact link connected to my email. This website was built with React, TypeScript, Next.js, Emotion JS for handling the CSS, and serverless functions to handle form validation.",
    featured: true,
    techStack: ["React", "Typescript", "Emotion.js", "Next.js"],
    github: "https://github.com/Nomad-Freedom/portfolio-v1",
    link: "https://bennyhernandez.com",
  },
];

const Portfolio = () => {
  const theme = useTheme();
  return (
    <section
      css={css`
        max-width: 1400px;
        padding: ${theme.space[6]}rem 0;
        margin: auto;
      `}
      id="projects"
    >
      <Heading mb={4}>Projects</Heading>
      <Text mb={3}>
        Showcasing complete functional projects that demonstrates what I can
        bring to your project. I built these projects from the ground up to
        demonstrate skills in font-end, back-end, security and database
        development. All these projects are fullstack web projects that are
        built so that you can demo them easily. Contact me to get a complete
        code walkthrough.
      </Text>
      <ProjectsList projects={projects} />
    </section>
  );
};

export default Portfolio;
